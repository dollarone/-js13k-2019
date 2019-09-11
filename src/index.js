"use strict"

import Main from './app/main.js'
import './styles/main.css'
import MainLoop from './app/mainloop.js'
import CPlayer from './app/player-small.js'
import Blob from './app/Blob.js'
let song1_sound = document.getElementById("song1")
let clear_sound = document.getElementById("clear")

function startDemo() {
var song = {
      songData: [
        { // Instrument 0
          i: [
          2, // OSC1_WAVEFORM
          192, // OSC1_VOL
          128, // OSC1_SEMI
          0, // OSC1_XENV
          2, // OSC2_WAVEFORM
          192, // OSC2_VOL
          140, // OSC2_SEMI
          18, // OSC2_DETUNE
          0, // OSC2_XENV
          0, // NOISE_VOL
          158, // ENV_ATTACK
          64, // ENV_SUSTAIN
          158, // ENV_RELEASE
          0, // ARP_CHORD
          0, // ARP_SPEED
          0, // LFO_WAVEFORM
          0, // LFO_AMT
          0, // LFO_FREQ
          0, // LFO_FX_FREQ
          2, // FX_FILTER
          5, // FX_FREQ
          0, // FX_RESONANCE
          0, // FX_DIST
          32, // FX_DRIVE
          0, // FX_PAN_AMT
          0, // FX_PAN_FREQ
          8, // FX_DELAY_AMT
          6 // FX_DELAY_TIME
          ],
          // Patterns
          p: [1,2,3,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4,5,,,,,,,,,,,,,,,,7,6,6,6,6,6,6,6,6,6,6,6,6],
          // Columns
          c: [
            {n: [103,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,115],
             f: []},
            {n: [,,,,,,,,,,,,,,,,103],
             f: []},
            {n: [,,,,,,,,,,,,,,,,103,,,,,,,,,,,,,,,,,,,,115],
             f: []},
            {n: [108,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,120],
             f: []},
            {n: [108,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,113],
             f: []},
            {n: [,,,,,,,,103,,,,,,,,,,,,,,,,,,,,99],
             f: []},
            {n: [,,,,,,,,,,,,,,,,,,,,,,,,,,,,99],
             f: []}
          ]
        },
        { // Instrument 1
          i: [
          3, // OSC1_WAVEFORM
          162, // OSC1_VOL
          128, // OSC1_SEMI
          0, // OSC1_XENV
          2, // OSC2_WAVEFORM
          166, // OSC2_VOL
          128, // OSC2_SEMI
          3, // OSC2_DETUNE
          0, // OSC2_XENV
          0, // NOISE_VOL
          12, // ENV_ATTACK
          25, // ENV_SUSTAIN
          45, // ENV_RELEASE
          1, // ARP_CHORD
          1, // ARP_SPEED
          0, // LFO_WAVEFORM
          61, // LFO_AMT
          4, // LFO_FREQ
          1, // LFO_FX_FREQ
          2, // FX_FILTER
          73, // FX_FREQ
          117, // FX_RESONANCE
          10, // FX_DIST
          27, // FX_DRIVE
          112, // FX_PAN_AMT
          3, // FX_PAN_FREQ
          59, // FX_DELAY_AMT
          6 // FX_DELAY_TIME
          ],
          // Patterns
          p: [1,2,3,4,5,4,5,6,7,6,7,6,7,6,7,,,,,,,8,8,9,9,8,8,9,9,,,,,10,10,10,10,27,27,27,27,27,27,27,27],
          // Columns
          c: [
            {n: [127,127,127,132,,,127,127,127,134,,,127,127,127,135,,,,,,,,,127,127,127,132,,,127,127],
             f: []},
            {n: [127,134,,,127,135,139,137,,,,,,,,,127,127,127,132,,,127,127,127,134,,,127,127,127,135],
             f: []},
            {n: [,,,,,,,,127,127,127,132,,,127,127,127,134,,,127,135,139,137],
             f: []},
            {n: [120,,,,,,,,120,,,,,,,,120,,,,,,,,120],
             f: []},
            {n: [120,,,,,,,,120,,,,,,,,125,,,,,,,,125],
             f: []},
            {n: [108,108,,,,,,106,108,108,,,,,,106,108,108,,,,,,106,113,113],
             f: []},
            {n: [108,108,,,,,,106,108,108,,,,,,106,108,108,,,,,,115,113,113],
             f: []},
            {n: [106,108,108,106,108,,106,108,,106,108,,,106,106,106,106,108,108,106,108,,106,108,,103,104],
             f: []},
            {n: [99,99,,99,99,,99,99,,99,99,,,104,103,99,103,104,,104,103,,104,103,,104,103],
             f: []},
            {n: [99,,,,,,,,,,99,,99],
             f: []},
            {n: [],
             f: []},
            {n: [],
             f: []},
            {n: [],
             f: []},
            {n: [],
             f: []},
            {n: [],
             f: []},
            {n: [],
             f: []},
            {n: [],
             f: []},
            {n: [],
             f: []},
            {n: [],
             f: []},
            {n: [],
             f: []},
            {n: [],
             f: []},
            {n: [],
             f: []},
            {n: [],
             f: []},
            {n: [],
             f: []},
            {n: [],
             f: []},
            {n: [],
             f: []},
            {n: [99,,,,,,,,,,99,,99,,,,103],
             f: []}
          ]
        },
        { // Instrument 2
          i: [
          0, // OSC1_WAVEFORM
          0, // OSC1_VOL
          140, // OSC1_SEMI
          0, // OSC1_XENV
          0, // OSC2_WAVEFORM
          0, // OSC2_VOL
          140, // OSC2_SEMI
          0, // OSC2_DETUNE
          0, // OSC2_XENV
          255, // NOISE_VOL
          158, // ENV_ATTACK
          158, // ENV_SUSTAIN
          158, // ENV_RELEASE
          0, // ARP_CHORD
          0, // ARP_SPEED
          0, // LFO_WAVEFORM
          51, // LFO_AMT
          2, // LFO_FREQ
          1, // LFO_FX_FREQ
          2, // FX_FILTER
          58, // FX_FREQ
          239, // FX_RESONANCE
          0, // FX_DIST
          32, // FX_DRIVE
          88, // FX_PAN_AMT
          1, // FX_PAN_FREQ
          157, // FX_DELAY_AMT
          2 // FX_DELAY_TIME
          ],
          // Patterns
          p: [1,1,1,1,1,,,,,,,1,1,1,1,1,1,1,1,1,1,,,,,,,,,1,1,1,1,1,1,1,1,,,,,,,,,1,1,1,1],
          // Columns
          c: [
            {n: [115],
             f: []}
          ]
        },
        { // Instrument 3
          i: [
          0, // OSC1_WAVEFORM
          49, // OSC1_VOL
          152, // OSC1_SEMI
          0, // OSC1_XENV
          0, // OSC2_WAVEFORM
          73, // OSC2_VOL
          152, // OSC2_SEMI
          12, // OSC2_DETUNE
          0, // OSC2_XENV
          0, // NOISE_VOL
          2, // ENV_ATTACK
          0, // ENV_SUSTAIN
          60, // ENV_RELEASE
          0, // ARP_CHORD
          0, // ARP_SPEED
          0, // LFO_WAVEFORM
          0, // LFO_AMT
          0, // LFO_FREQ
          0, // LFO_FX_FREQ
          2, // FX_FILTER
          255, // FX_FREQ
          0, // FX_RESONANCE
          0, // FX_DIST
          32, // FX_DRIVE
          47, // FX_PAN_AMT
          3, // FX_PAN_FREQ
          45, // FX_DELAY_AMT
          2 // FX_DELAY_TIME
          ],
          // Patterns
          p: [,,,1,2,1,2,1,2,1,2],
          // Columns
          c: [
            {n: [144,,,,,,,,,,,,146,,147,,144],
             f: []},
            {n: [144,,,,,,,,,,,,146,,147,,149],
             f: []}
          ]
        },
        { // Instrument 4
          i: [
          0, // OSC1_WAVEFORM
          255, // OSC1_VOL
          116, // OSC1_SEMI
          1, // OSC1_XENV
          0, // OSC2_WAVEFORM
          255, // OSC2_VOL
          116, // OSC2_SEMI
          0, // OSC2_DETUNE
          1, // OSC2_XENV
          0, // NOISE_VOL
          4, // ENV_ATTACK
          6, // ENV_SUSTAIN
          35, // ENV_RELEASE
          0, // ARP_CHORD
          0, // ARP_SPEED
          0, // LFO_WAVEFORM
          0, // LFO_AMT
          0, // LFO_FREQ
          0, // LFO_FX_FREQ
          2, // FX_FILTER
          14, // FX_FREQ
          0, // FX_RESONANCE
          0, // FX_DIST
          32, // FX_DRIVE
          0, // FX_PAN_AMT
          0, // FX_PAN_FREQ
          0, // FX_DELAY_AMT
          0 // FX_DELAY_TIME
          ],
          // Patterns
          p: [,,,,,1,1,1,1,1,1,,,,,,,,,,,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3],
          // Columns
          c: [
            {n: [123,,,,,,,,,,123,,123,,,,,,,,123,,,,,,,,,,123],
             f: []},
            {n: [123,,,,,,,,,,123,,123],
             f: []},
            {n: [123,,,,,,,,,,123,,123,,,,,,,,,,123,,123],
             f: []}
          ]
        },
        { // Instrument 5
          i: [
          0, // OSC1_WAVEFORM
          0, // OSC1_VOL
          140, // OSC1_SEMI
          0, // OSC1_XENV
          0, // OSC2_WAVEFORM
          0, // OSC2_VOL
          114, // OSC2_SEMI
          0, // OSC2_DETUNE
          0, // OSC2_XENV
          27, // NOISE_VOL
          4, // ENV_ATTACK
          10, // ENV_SUSTAIN
          34, // ENV_RELEASE
          0, // ARP_CHORD
          0, // ARP_SPEED
          0, // LFO_WAVEFORM
          187, // LFO_AMT
          5, // LFO_FREQ
          0, // LFO_FX_FREQ
          1, // FX_FILTER
          239, // FX_FREQ
          135, // FX_RESONANCE
          0, // FX_DIST
          32, // FX_DRIVE
          108, // FX_PAN_AMT
          5, // FX_PAN_FREQ
          16, // FX_DELAY_AMT
          4 // FX_DELAY_TIME
          ],
          // Patterns
          p: [,,,,,1,1,1,1,1,1,,,,,,,,,,,1,1,1,1,1,1,1,1,,,,,,,2,2,2,2,2,2,2,2,2,2],
          // Columns
          c: [
            {n: [135,,135,,135,,,,135,,135,,135,,135,,135,,135,,135,,,,135,,135,,135,,135],
             f: []},
            {n: [135,,135,,135,,135,,135,,135,,135,,135,,135,,135,,135,,135,,135,,135,,135,,135],
             f: []}
          ]
        },
        { // Instrument 6
          i: [
          0, // OSC1_WAVEFORM
          0, // OSC1_VOL
          128, // OSC1_SEMI
          0, // OSC1_XENV
          0, // OSC2_WAVEFORM
          0, // OSC2_VOL
          113, // OSC2_SEMI
          0, // OSC2_DETUNE
          0, // OSC2_XENV
          61, // NOISE_VOL
          0, // ENV_ATTACK
          1, // ENV_SUSTAIN
          59, // ENV_RELEASE
          0, // ARP_CHORD
          0, // ARP_SPEED
          0, // LFO_WAVEFORM
          0, // LFO_AMT
          0, // LFO_FREQ
          0, // LFO_FX_FREQ
          1, // FX_FILTER
          193, // FX_FREQ
          171, // FX_RESONANCE
          0, // FX_DIST
          29, // FX_DRIVE
          39, // FX_PAN_AMT
          3, // FX_PAN_FREQ
          53, // FX_DELAY_AMT
          2 // FX_DELAY_TIME
          ],
          // Patterns
          p: [,,,,,1,1,2,1,2,1,,,,,,,,,,,1,1,1,1,1,1,1,1],
          // Columns
          c: [
            {n: [,,,,,,135,,,,,,,,,,,,,,,,135],
             f: []},
            {n: [135,,,,,,135,,,,,,,,,,,,,,,,135],
             f: []}
          ]
        },
        { // Instrument 7
          i: [
          3, // OSC1_WAVEFORM
          0, // OSC1_VOL
          128, // OSC1_SEMI
          0, // OSC1_XENV
          3, // OSC2_WAVEFORM
          25, // OSC2_VOL
          128, // OSC2_SEMI
          0, // OSC2_DETUNE
          1, // OSC2_XENV
          128, // NOISE_VOL
          4, // ENV_ATTACK
          4, // ENV_SUSTAIN
          40, // ENV_RELEASE
          0, // ARP_CHORD
          0, // ARP_SPEED
          1, // LFO_WAVEFORM
          55, // LFO_AMT
          4, // LFO_FREQ
          1, // LFO_FX_FREQ
          2, // FX_FILTER
          67, // FX_FREQ
          115, // FX_RESONANCE
          124, // FX_DIST
          190, // FX_DRIVE
          67, // FX_PAN_AMT
          6, // FX_PAN_FREQ
          39, // FX_DELAY_AMT
          1 // FX_DELAY_TIME
          ],
          // Patterns
          p: [,,,,,1,2,1,1,1,1,,,,,,,,,,3,1,4,1,2,1,4,2,4,,,,,,,,,,3,1,1,1,4],
          // Columns
          c: [
            {n: [,,,,135,,,,,,,,135,,,,,,,,135,,,,,,,,135],
             f: []},
            {n: [,,,,135,,,,,,,,135,,,,,,,,135,,,,,,,,134,130,127,123],
             f: []},
            {n: [,,,,,,,,,,,,,,,,,,,,,,,,,,,,134,,127,123],
             f: []},
            {n: [,,,,135,,,,,,,,135,,,,,,,,135,,,,,,,,135,,135,134],
             f: []}
          ]
        },
        { // Instrument 8
          i: [
          3, // OSC1_WAVEFORM
          194, // OSC1_VOL
          128, // OSC1_SEMI
          0, // OSC1_XENV
          2, // OSC2_WAVEFORM
          198, // OSC2_VOL
          128, // OSC2_SEMI
          6, // OSC2_DETUNE
          0, // OSC2_XENV
          0, // NOISE_VOL
          12, // ENV_ATTACK
          12, // ENV_SUSTAIN
          33, // ENV_RELEASE
          0, // ARP_CHORD
          0, // ARP_SPEED
          0, // LFO_WAVEFORM
          61, // LFO_AMT
          4, // LFO_FREQ
          1, // LFO_FX_FREQ
          2, // FX_FILTER
          109, // FX_FREQ
          86, // FX_RESONANCE
          7, // FX_DIST
          32, // FX_DRIVE
          112, // FX_PAN_AMT
          3, // FX_PAN_FREQ
          67, // FX_DELAY_AMT
          2 // FX_DELAY_TIME
          ],
          // Patterns
          p: [,7,6,,,,,,,,,,,,,,,,,,,3,3,5,5,1,1,2,2],
          // Columns
          c: [
            {n: [123,127,,123,127,,123,127,,123,127,,,123,127,130,132,134,,130,132,134,135,,,132,130],
             f: []},
            {n: [130,132,,130,132,,130,132,,128,127,,,127,125,123,125,127,,125,127,,123,115,,116,115],
             f: []},
            {n: [106,108,108,106,108,,106,108,,106,108,,,106,106,106,106,108,108,106,108,,106,108,,103,104],
             f: []},
            {n: [99,99,,99,99,,99,99,,99,99,,,99,103,104,106,108,,104,103,,104,103,,104,103],
             f: []},
            {n: [99,99,,99,99,,99,99,,99,99,,,104,103,99,103,104,,104,103,,104,103,,104,103],
             f: []},
            {n: [115,,,,,,,,,,,115,115,,,,,115,115,,,,,115,115],
             f: []},
            {n: [,,,,,,,,,,,,,,,,,,,115,115,,,,,115,115,,,,,115],
             f: []}
          ]
        },
      ],
      rowLen: 7350,   // In sample lengths
      patternLen: 32,  // Rows per pattern
      endPattern: 48,  // End pattern
      numChannels: 9  // Number of channels
    };


  	// Initialize music generation (player).
  	var player = new CPlayer()
  	player.init(song)
  	var done = false;
	while(!done) {
	 	if (done) {
    		return
    	}
    	done = player.generate() >= 1

    	if (done) {
    		var wave = player.createWave()
    		song1_sound.src = URL.createObjectURL(new Blob([wave], {type: "audio/wav"}))
    		song1_sound.loop = true
    	}
	}
}
//startDemo()

// #a{width:100vmin;top:50%;left:50%;transform:translateX(-50%)translateY(-50%);background:#333333}

let game = new Main()

gameCanvas.onmousedown  = e => {
  e.preventDefault();
  let pointer_down = true;
  [down_x, down_y] = update_mouse(e);
  i.textContent=e.offsetX + "," + e.offsetY
  game.click(e) 
}

/* Right click */
oncontextmenu = e => {
  e.preventDefault();
};


MainLoop.setUpdate(game.update).setDraw(game.render).setSimulationTimestep(1000/60)
function stateChange(newState) {
    setTimeout(function () {
    	document.getElementById("i").style.display = "none"
		  song1_sound.play()
        MainLoop.start()
    }, 3);
}
//stateChange()
MainLoop.start()