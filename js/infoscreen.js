var env = nunjucks.configure('/templates');
env.addFilter( 'decodehtml' , function ( html ) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
} );

env.addFilter( 'moment' , function( string , output ) {
	return moment( string , output ).format( "dddd, MMMM Do YYYY" );
} );

var requesturl = 'https://nunjucks.cftoolbox.io/wp-json/remote-templates/v1/get_templates';

var requesturl = 'https://wpbeaverbuilder.com/wp-json/wp/v2/posts';

(function($) {

	$( document ).ready( function() {

		// add our modal
		infoscreen.add_data_nodes();
		// add the loading message
		$( '#modal-center .message' ).html( infoscreen.loading() );
		// show the modal while initializing
		//UIkit.modal( '#modal-center' ).show();

		infoscreen.render_data( { target : '#si-data' } );
		infoscreen.render_slider( { target : '#si-slider' } );

		infoscreen.autorefresh();
	});
})(jQuery);

var infoscreen = {

	loading: function() {
		return 'loading data, please hold on';
	},

	add_data_nodes: function() {
		$( this.add_node( 'data-node.html' ) ).appendTo( 'body' );
		$( this.add_node( 'uikit-modal.html' ) ).appendTo( 'body' );

	},

	add_node: function( template ) {
		var res = nunjucks.render( template );
		return 	res;
	},

	notification: function( message ) {

		UIkit.notification( message , {timeout: 1000 , pos: 'bottom-right' });

	},

	render_data: function( options ) {
		if ( typeof options.target == 'undefined' ) return;

		$.ajax(
			{
				method: 'GET',
				url: requesturl,
				//data: { id: 3 , api: 'abcwegermee' }
			}
			).done( function( data ) {

				infoscreen.notification( 'event data loaded' );

				var res = nunjucks.render( 'events.html' , { data: data } );
				$( options.target ).html( res );
				UIkit.modal( '#modal-center' ).hide();
				return true;

			});
	},

	render_slider: function( options ) {
		if ( typeof options.target == 'undefined' ) return;

		$.ajax(
			{
				method: 'GET',
				url: requesturl,
				//data: { id: 3 , api: 'abcwegermee' }
			}
			).done( function( data ) {

				infoscreen.notification( 'slider data loaded' );

				var res = nunjucks.render( 'slideshow.html' , { data: data } );
				$( options.target ).html( res );
				UIkit.modal( '#modal-center' ).hide();
				return true;

			});
	},


	autorefresh: function() {
		setTimeout( function () {
			infoscreen.notification( 'refreshing data' );
			//UIkit.modal( '#modal-center' ).show();
			infoscreen.render_data( { target : '#si-data' } );
			infoscreen.autorefresh();

		} , 30 * 1000 );



	}
}