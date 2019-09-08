#!/usr/bin/env node
/**************************************************************
	@AUTHOR: Kingsley Nnaji <kingsley.nnaji@gmail.com>
	@LICENSE: MIT
	Creation Date : 08.09.2019
***************************************************************/
const program = require('commander');
const moment = require('moment');
const shj = require('shelljs');

let userGreeting = 'Welcome'.toUpperCase();
let programmVersion = 'Version: 1.0.0'.toUpperCase();

shj.echo('******************************************');
shj.echo('*    ', userGreeting, process.env.USER.replace('k', 'K'), ' **');
shj.echo('*    ', 'PROSCAFF: ', programmVersion, ' **');
shj.echo('*    ', moment().format('LLLL'), '  **');
shj.echo('*****************************************');

program.version(programmVersion);
