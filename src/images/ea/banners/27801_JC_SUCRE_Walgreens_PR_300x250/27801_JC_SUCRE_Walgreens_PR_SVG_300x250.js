//==================== MASKS (REF: http://codepen.io/shigimcp/pen/qNgwxy) ====================

//-------------------- bottle --------------------
<svg version='1.1' baseProfile='full' id='bottle_svg' width='110' height='180' xml:space='preserve'>

	<defs>

		<mask id='mask_bottle'>
			<image xlink:href='images/bottle_ko.png' width='110' height='180' />
		</mask>

	</defs>

	<g mask='url(#mask_bottle)'>
		<image id='bottle_svg' xlink:href='images/bottle.jpg' width='110' height='180' />
	</g>

</svg>


//-------------------- lockup --------------------
<svg version='1.1' baseProfile='full' id='logo_svg' width='100' height='140' xml:space='preserve'>

	<defs>

		<mask id='logo_mask'>
			<image xlink:href='images/logo_ko.png' x='20' y='25' width='100' height='140' />
		</mask>

		<mask id='cta_mask'>
			<image xlink:href='images/cta_ko.png' x='20' y='200' width='100' height='35' />
		</mask>

	</defs>

	<g mask='url(#logo_mask)'>
		<image id='logo_svg' xlink:href='images/logo.jpg' x='20' y='25' width='100' height='140' />
	</g>

	<image id='logo_jc_svg' xlink:href='images/LOGO_JC.svg' x='33' y='170' width='75' height='13' />
	<image id='hashtag_svg' xlink:href='images/hashtag.svg' x='26' y='188' width='88' height='8' />

	<g mask='url(#cta_mask)'>
		<image id='cta_svg' xlink:href='images/cta.jpg' x='20' y='200' width='100' height='35' />
	</g>

//	<image id='logo_walgreens_svg' xlink:href='images/logo_walgreens.svg' x='35' y='230' width='60' height='15' />

</svg>


//-------------------- lockup_ds --------------------
<svg version='1.1' baseProfile='full' id='lockup_ds_svg' width='140' height='250' xml:space='preserve'>

	<defs>

		<filter id='lockup_ds' x='-75%' y='-75%' width='250%' height='250%' xmlns='http://www.w3.org/2000/svg'>
			<feGaussianBlur in='SourceGraphic' stdDeviation='25' result='lockup_blur' />
			<feOffset dx='0' dy='0' result='lockup_blurOffset'/>
			<feComponentTransfer><feFuncA type='linear' slope='3'/></feComponentTransfer>
		</filter>

	</defs>

	<g filter='url(#lockup_ds)'>
		<image id='logo_ds_svg' xlink:href='images/logo_ko.png' x='20' y='25' width='100' height='140' />
	</g>

</svg>
