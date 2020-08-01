//==================== MASKS (REF: http://codepen.io/shigimcp/pen/qNgwxy) ====================

//-------------------- bottle --------------------
<svg version='1.1' baseProfile='full' id='bottle_svg' width='90' height='190' xml:space='preserve'>

	<defs>

		<pattern id='pattern_bottle' patternUnits='userSpaceOnUse' x='0' y='0' width='90' height='190'>
			<image xlink:href='images/bottle.jpg' width='90' height='190' />
		</pattern>

		<pattern id='pattern_bottle_ko' patternUnits='userSpaceOnUse' x='0' y='0' width='90' height='190'>
			<image xlink:href='images/bottle_ko.png' width='90' height='190' />
		</pattern>

		<mask id='mask_bottle'>
			<rect class='class_maskBOTTLE' fill='url(#pattern_bottle_ko)' x='0' y='0' width='90' height='190' />
		</mask>

	</defs>

	<g mask='url(#mask_bottle)'>
		<rect id='bottle_img' width='90' height='190' fill='url(#pattern_bottle)' />
	</g>

</svg>


//-------------------- gwp --------------------
<svg version='1.1' baseProfile='full' id='gwp_svg' width='170' height='190' xml:space='preserve'>

	<defs>

		<pattern id='pattern_gwp' patternUnits='userSpaceOnUse' x='0' y='0' width='170' height='190'>
			<image xlink:href='images/gwp.jpg' width='170' height='190' />
		</pattern>

		<pattern id='pattern_gwp_ko' patternUnits='userSpaceOnUse' x='0' y='0' width='170' height='190'>
			<image xlink:href='images/gwp_ko.png' width='170' height='190' />
		</pattern>

		<mask id='mask_gwp'>
			<rect class='class_maskgwp' fill='url(#pattern_gwp_ko)' x='0' y='0' width='170' height='190' />
		</mask>

	</defs>

	<g mask='url(#mask_gwp)'>
		<rect id='gwp_img' width='170' height='190' fill='url(#pattern_gwp)' />
	</g>

</svg>


//-------------------- bg02 --------------------
<svg version='1.1' baseProfile='full' id='bg02_svg' width='300' height='250' xml:space='preserve'>

	<defs>

		<pattern id='pattern_bg02' patternUnits='userSpaceOnUse' x='0' y='0' width='300' height='250'>
			<image xlink:href='images/bg02.jpg' width='300' height='250' />
		</pattern>

		<lineargradient id='maskGradUP' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='200'>
			<stop offset='0' style='stop-color:#000000'/>
			<stop offset='0.375' style='stop-color:#FFFFFF'/>
			<stop offset='0.625' style='stop-color:#FFFFFF'/>
			<stop offset='1' style='stop-color:#000000'/>
		</lineargradient>

		<mask id='mask_bgUP'>
			<rect class='class_maskUP' fill='url(#maskGradUP)' x='0' y='0' width='300' height='250' />
		</mask>

		<lineargradient id='maskGradDN' gradientUnits='userSpaceOnUse' x1='0' y1='50' x2='0' y2='250'>
			<stop offset='0' style='stop-color:#000000'/>
			<stop offset='0.375' style='stop-color:#FFFFFF'/>
			<stop offset='0.625' style='stop-color:#FFFFFF'/>
			<stop offset='1' style='stop-color:#000000'/>
		</lineargradient>

		<mask id='mask_bgDN'>
			<rect class='class_maskDN' fill='url(#maskGradDN)' x='0' y='0' width='300' height='250' />
		</mask>

	</defs>

	<g mask='url(#mask_bgUP)'>
		<rect id='bg02_imgUP' width='300' height='250' fill='url(#pattern_bg02)' />
	</g>

	<g mask='url(#mask_bgDN)'>
		<rect id='bg02_imgDN' width='300' height='250' fill='url(#pattern_bg02)' />
	</g>

</svg>



//==================== MASK ANIMATION ====================

//-------------------- bg02 --------------------
	.fromTo('#maskGradUP', animDuration03, {attr:{y1:250, y2:450}}, {attr:{y1:-200, y2:0}, ease:Power3.easeIn}, 'frame01 +=0')
	.fromTo('#maskGradDN', animDuration03, {attr:{y1:-200, y2:0}}, {attr:{y1:250, y2:450}, ease:Power3.easeIn}, 'frame01 +=0.25')





//==================== SVG BLUR (REFs: http://codepen.io/shigimcp/pen/yVLrNG, https://codepen.io/shigimcp/pen/dOyLeW?editors=1100) ====================

//-------------------- LOGO_NMTG_ds --------------------
<svg version='1.1' baseProfile='full' id='logo_ko_svg' width='225' height='79' xml:space='preserve' overflow='visible'>

	<defs>

		<pattern id='pattern_logo_ko1' patternUnits='userSpaceOnUse' x='0' y='0' width='225' height='79'>
//			<image xlink:href='images/LOGO_NMGT_ko.svg' width='225' height='79' />
//			<image xlink:href='images/LOGO_NMTG_girl_ko.svg' width='225' height='79' />
//			<image xlink:href='images/LOGO_NMTG_trini_ko.svg' width='225' height='79' />
//			<image xlink:href='images/LOGO_NMTG_nicki_ko.svg' width='225' height='79' />
//			<image xlink:href='images/bg01.jpg' width='300' height='350' result='bg01' />
			<image xlink:href='images/LOGO_NMTG_ko_y.svg' width='225' height='79' result='LOGO_NMTG_ko' />
		</pattern>

		<filter id='dropshadow01' x='-75%' y='-100%' width='250%' height='250%' xmlns='http://www.w3.org/2000/svg'>

			<feGaussianBlur in='SourceGraphic' stdDeviation='30' result='blur_logo01' />

			<feOffset dx='0' dy='0' result='blurOffset01'/>

			<feComponentTransfer>
				<feFuncA type='linear' slope='3' intercept='0'/>
			</feComponentTransfer>

//			<feImage x='0' y='0' width='300' height='350' xlink: href='images/bg01.jpg' result='bg01' />
//			<feImage x='38' y='95' width='225' height='79' xlink: href='images/LOGO_NMTG_ko.svg' result='LOGO_NMTG_ko' />
//			<feBlend mode='multiply' in='bg01' in2='LOGO_NMTG_ko'/>

		</filter>


		<pattern id='pattern_logo_ko2' patternUnits='userSpaceOnUse' x='0' y='0' width='225' height='79'>
			<image xlink:href='images/LOGO_NMTG_ko_w.svg' width='225' height='79' />
		</pattern>

		<filter id='dropshadow02' x='-75%' y='-75%' width='250%' height='250%' xmlns='http://www.w3.org/2000/svg'>

			<feGaussianBlur in='SourceGraphic' stdDeviation='25' result='blur_logo02'/>

			<feOffset dx='0' dy='0' result='blurOffset02'/>

			<feComponentTransfer>
				<feFuncA type='linear' slope='4' intercept='0'/>
			</feComponentTransfer>

		</filter>

	</defs>

	<g id='LOGO_NMTG_ds1_svg' filter='url(#dropshadow01)'>
		<rect id='logo_ko1' width='225' height='79' fill='url(#pattern_logo_ko1)' />
	</g>

	<g id='LOGO_NMTG_ds2_svg' filter='url(#dropshadow02)'>
		<rect id='logo_ko2' width='225' height='79' fill='url(#pattern_logo_ko2)' />
	</g>

</svg>




<svg version='1.1' baseProfile='full' id='bg01_logo_ko_svg' width='300' height='350' xml:space='preserve' overflow='visible'>

	 <defs>

		<pattern id='pattern_bg01' patternUnits='userSpaceOnUse' x='0' y='0' width='300' height='350'>
			<image xlink:href='images/bg01.jpg' width='300' height='350' />
		</pattern>

		<filter id='bg01_logo_ko_blend' x='0' y='0' width='300' height='350' filter units='userSpaceOnUse'>
			<feImage x='0' y='0' width='300' height='350' xlink: href='images/bg01.jpg' result='bg01' />
			<feImage x='38' y='95' width='225' height='79' xlink: href='images/LOGO_NMTG_ko.svg' result='LOGO_NMTG_ko' />
			<feBlend mode='multiply' in='bg01' in2='SourceGraphic' />
		</ filter>

	 </ defs>

//	<image xlink:href='images/bg01.jpg' x='0' y='0' width='300' height='350' style='filter:url(#bg01_logo_ko_blend);'/>

//	<g id='bg01_blend_svg' filter='url(#bg01_logo_ko_blend)'></g>

	<g id='bg01_blend_svg' filter='url(#bg01_logo_ko_blend)'>
		<rect id='bg01_blend' width='300' height='350' fill='url(#pattern_bg01)' />
	</g>

</svg>





<filter id='SI' >
	<feGaussianBlur in='BackgroundImage' stdDeviation='20,1'/>
	<feGaussianBlur in='SourceGraphic' stdDeviation='35' />
	<feComponentTransfer >
		<feFuncA type='linear' slope='1.1' intercept='0'/>
	</feComponentTransfer>
</filter>

<g enable-background='new'>
	<rect x='0' y='12%' height='4%' width='100%' fill='white'/>
	<rect x='0' y='22%' height='4%' width='100%' fill='white'/>
	<rect x='0' y='32%' height='4%' width='100%' fill='white'/>
	<rect x='11%' y='10%'  height='30%' width='18%' filter='url(#BI)' fill='white'/>
	<rect x='38%' y='10%'  height='30%' width='18%' filter='url(#SI)' fill='white'/>
</g>