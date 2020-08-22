<?php
/**
 * pubx-infoscreen
 *
 * @var string
 */

$version = "1.0.1";
$server_location = "https://nunjucks.cftoolbox.io/wp-json/";
$request = "remote-templates/v1/get_templates?id=3&api=abcwegermee";
?>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<title>Infoscreen</title>
		<!-- UIkit CSS -->
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.5.6/dist/css/uikit.min.css" />
		<link rel="stylesheet" href="css/infoscreen.css" />
		<!-- UIkit JS -->
		<script src="https://cdn.jsdelivr.net/npm/uikit@3.5.6/dist/js/uikit.min.js"></script>
		<script src="https://cdn.jsdelivr.net/npm/uikit@3.5.6/dist/js/uikit-icons.min.js"></script>
		<script src="https://code.jquery.com/jquery-3.5.1.min.js" id="jquery-js"></script>
		<script src="https://mozilla.github.io/nunjucks/files/nunjucks.min.js" id="nunjucks-js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/gsap.min.js" id="gsap-js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js" id="moment-js"></script>
		<script src="/js/infoscreen.js?version=<?php echo $version; ?>" id="main-script"></script>
	</head>
	<body>
	</body>
</html>