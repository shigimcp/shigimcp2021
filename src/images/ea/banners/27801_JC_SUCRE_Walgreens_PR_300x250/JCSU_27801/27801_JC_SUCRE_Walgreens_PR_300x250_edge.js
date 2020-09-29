/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'sans-serif, customCSS': '<link rel=\"stylesheet\" type=\"text/css\" href=\"scripts/custom.css\" />'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            "https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js",
            "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bg',
                            type: 'image',
                            rect: ['-50px', '-45px', '400px', '340px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bg.jpg",'0px','0px']
                        },
                        {
                            id: 'bottle',
                            type: 'rect',
                            rect: ['95px', '40px', '110px', '180px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'stripeW',
                            type: 'group',
                            rect: ['160px', '0', '126', '250', 'auto', 'auto'],
                            opacity: '1',
                            c: [
                            {
                                id: 'stripeW01',
                                type: 'rect',
                                rect: ['0px', '0px', '14px', '250px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'stripeW02',
                                type: 'rect',
                                rect: ['28px', '0px', '14px', '250px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'stripeW03',
                                type: 'rect',
                                rect: ['56px', '0px', '14px', '250px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'stripeW04',
                                type: 'rect',
                                rect: ['84px', '0px', '14px', '250px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'stripeW05',
                                type: 'rect',
                                rect: ['112px', '0px', '14px', '250px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            }]
                        },
                        {
                            id: 'stripeP',
                            type: 'group',
                            rect: ['174', '0', '126', '250', 'auto', 'auto'],
                            opacity: '1',
                            c: [
                            {
                                id: 'stripeP05',
                                type: 'rect',
                                rect: ['112px', '0px', '14px', '250px', 'auto', 'auto'],
                                fill: ["rgba(252,225,236,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'stripeP04',
                                type: 'rect',
                                rect: ['84px', '0px', '14px', '250px', 'auto', 'auto'],
                                fill: ["rgba(252,225,236,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'stripeP03',
                                type: 'rect',
                                rect: ['56px', '0px', '14px', '250px', 'auto', 'auto'],
                                fill: ["rgba(252,225,236,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'stripeP02',
                                type: 'rect',
                                rect: ['28px', '0px', '14px', '250px', 'auto', 'auto'],
                                fill: ["rgba(252,225,236,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'stripeP01',
                                type: 'rect',
                                rect: ['0px', '0px', '14px', '250px', 'auto', 'auto'],
                                fill: ["rgba(252,225,236,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            }]
                        },
                        {
                            id: 'lockup_ds',
                            type: 'rect',
                            rect: ['160px', '0px', '140px', '250px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(255,255,255,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'lockup',
                            type: 'rect',
                            rect: ['160px', '0px', '140px', '250px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'logo_walgreens',
                            type: 'image',
                            rect: ['10px', '10px', '24px', '24px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"LOGO_walgreens.svg",'0px','0px']
                        },
                        {
                            id: 'border',
                            type: 'rect',
                            rect: ['0px', '0px', '298', '248', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [1,"rgba(240,180,203,1.00)","solid"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '300', '250', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("27801_JC_SUCRE_Walgreens_PR_300x250_edgeActions.js");
})("JC_SUCRE_27801");
