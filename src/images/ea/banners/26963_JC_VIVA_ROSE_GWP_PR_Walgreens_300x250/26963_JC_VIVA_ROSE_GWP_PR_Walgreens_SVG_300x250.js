//==================== MASKS (REF: http://codepen.io/shigimcp/pen/qNgwxy) ====================

//-------------------- logo --------------------
<svg version='1.1' baseProfile='full' id='logo_svg' width='130' height='225' xml:space='preserve'>

	<defs>

		<pattern id='logo_vr_pattern' patternUnits='userSpaceOnUse' x='0' y='0' width='130' height='200'>
			<image xlink:href='images/logo.jpg' width='130' height='200' />
		</pattern>

		<mask id='logo_vr_mask'>
			<image xlink:href='images/logo_ko.png' width='130' height='200' />
		</mask>

	</defs>

	<g mask='url(#logo_vr_mask)'>
		<rect id='logo_vr_img' width='130' height='200' fill='url(#logo_vr_pattern)' />
	</g>

	<image id='logo_jc_svg' xlink:href='images/LOGO_JC.svg' x='15' y='205' width='100' height='17' />

</svg>


//-------------------- logo_ds --------------------
<svg version='1.1' baseProfile='full' id='logo_ds_svg' width='130' height='225' xml:space='preserve'>

	<defs>

		<filter id='Finvert' x='0%' y='0%' width='100%' height='100%'>
			<feColorMatrix in='SourceGraphic' type='matrix' values='-1 0 0 0 1 
																   0 -1 0 0 1 
																   0 0 -1 0 1 
																   0 0 0 1 0'/>
		</filter>

		<filter id='logo_ds01' x='-75%' y='-75%' width='250%' height='250%' xmlns='http://www.w3.org/2000/svg'>
			<feGaussianBlur in='SourceGraphic' stdDeviation='50' result='logo_blur01' />
			<feOffset dx='0' dy='0' result='logo_blurOffset01'/>
			<feComponentTransfer><feFuncA type='linear' slope='3'/></feComponentTransfer>
		</filter>

		<filter id='logo_ds02' x='-75%' y='-75%' width='350%' height='350%' xmlns='http://www.w3.org/2000/svg'>
			<feGaussianBlur in='SourceGraphic' stdDeviation='12' result='logo_blur02' />
			<feOffset dx='0' dy='0' result='logo_blurOffset02'/>
			<feComponentTransfer><feFuncA type='linear' slope='5'/></feComponentTransfer>
		</filter>

	</defs>

	<g filter='url(#logo_ds01)'>
		<image id='logo_ds_svg' xlink:href='images/logo_ko.png' width='130' height='200' />
	</g>

	<g filter='url(#logo_ds02)'>
		<image id='logo_jc_ds_svg' xlink:href='images/LOGO_JC.svg' x='15' y='205' width='100' height='17' filter='url(#Finvert)' />
	</g>

</svg>


//-------------------- bottle --------------------
<svg version='1.1' baseProfile='full' id='bottle_svg' width='190' height='245' xml:space='preserve'>

	<defs>

		<pattern id='pattern_bottle' patternUnits='userSpaceOnUse' x='0' y='0' width='190' height='245'>
			<image xlink:href='images/bottle.jpg' width='190' height='245' />
		</pattern>

		<pattern id='pattern_bottle_ko' patternUnits='userSpaceOnUse' x='0' y='0' width='190' height='245'>
			<image xlink:href='images/bottle_ko.png' width='190' height='245' />
		</pattern>

		<mask id='mask_bottle'>
			<rect class='class_maskBOTTLE' fill='url(#pattern_bottle_ko)' x='0' y='0' width='190' height='245' />
		</mask>

	</defs>

	<g mask='url(#mask_bottle)'>
		<rect id='bottle_img' width='190' height='245' fill='url(#pattern_bottle)' />
	</g>

</svg>


//-------------------- gwp --------------------
<svg version='1.1' baseProfile='full' id='gwp_svg' width='160' height='165' xml:space='preserve'>

	<defs>

		<pattern id='pattern_gwp' patternUnits='userSpaceOnUse' x='0' y='0' width='160' height='165'>
			<image xlink:href='images/gwp.jpg' width='160' height='165' />
		</pattern>

		<pattern id='pattern_gwp_ko' patternUnits='userSpaceOnUse' x='0' y='0' width='160' height='165'>
			<image xlink:href='images/gwp_ko.png' width='160' height='165' />
		</pattern>

		<mask id='mask_gwp'>
			<rect class='class_maskgwp' fill='url(#pattern_gwp_ko)' x='0' y='0' width='160' height='165' />
		</mask>

	</defs>

	<g mask='url(#mask_gwp)'>
		<rect id='gwp_img' width='160' height='165' fill='url(#pattern_gwp)' />
	</g>

</svg>


//-------------------- copy01 --------------------
<svg version='1.1' baseProfile='full' id='copy01_svg' width='100' height='10' xml:space='preserve'>

	<defs>

		<filter id='Finvert' x='0%' y='0%' width='100%' height='100%'>
			<feColorMatrix in='SourceGraphic' type='matrix' values='-1 0 0 0 1 
																   0 -1 0 0 1 
																   0 0 -1 0 1 
																   0 0 0 1 0'/>
		</filter>

		<filter id='copy01_ds01' x='-75%' y='-75%' width='250%' height='250%' xmlns='http://www.w3.org/2000/svg'>
			<feGaussianBlur in='SourceGraphic' stdDeviation='7' result='copy01_blur01' />
			<feOffset dx='0' dy='0' result='copy01_blurOffset01'/>
			<feComponentTransfer><feFuncA type='linear' slope='5'/></feComponentTransfer>
		</filter>

	</defs>

	<g filter='url(#copy01_ds01)'>
		<image id='copy01_ds_svg' xlink:href='images/copy01.png' x='0%' y='-37.5%' width='100' height='10' filter='url(#Finvert)' />
	</g>

	<g>
		<image id='copy01_svg' xlink:href='images/copy01.png' x='0' y='-37.5%' width='100' height='10' />
	</g>

</svg>


//-------------------- legal --------------------
<svg version='1.1' baseProfile='full' id='legal_svg' width='250' height='10' xml:space='preserve'>

	<defs>

		<filter id='Finvert' x='0%' y='0%' width='100%' height='100%'>
			<feColorMatrix in='SourceGraphic' type='matrix' values='-1 0 0 0 1 
																   0 -1 0 0 1 
																   0 0 -1 0 1 
																   0 0 0 1 0'/>
		</filter>

		<filter id='legal_ds01' x='-75%' y='-75%' width='250%' height='250%' xmlns='http://www.w3.org/2000/svg'>
			<feGaussianBlur in='SourceGraphic' stdDeviation='7' result='legal_blur01' />
			<feOffset dx='0' dy='0' result='legal_blurOffset01'/>
			<feComponentTransfer><feFuncA type='linear' slope='5'/></feComponentTransfer>
		</filter>

	</defs>

	<g filter='url(#legal_ds01)'>
		<image id='legal_ds_svg' xlink:href='images/legal.png' x='0%' y='-37.5%' width='250' height='10' filter='url(#Finvert)' />
	</g>

	<g>
		<image id='legal_svg' xlink:href='images/legal.png' x='0' y='-37.5%' width='250' height='10' />
	</g>

</svg>
