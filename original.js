// ==UserScript==
// @name         Forum Master・Discuz!
// @name:en      Forum Master・Discuz!
// @name:zh      论坛大师・Discuz!　界面美化、移除广告、功能增强……
// @name:zh-CN   论坛大师・Discuz!　界面美化、移除广告、功能增强……
// @name:zh-HK   論壇大師・Discuz!　界面美化、移除廣告、功能增強……
// @name:zh-TW   論壇大師・Discuz!　界面美化、移除廣告、功能增強……
// @namespace    Forum Master・Discuz!
// @homepage     https://greasyfork.org/scripts/400250
// @version      0.0.9
// @icon         https://www.discuz.net/favicon.ico
// @description  Forum Master - Discuz!　Beautify the interface, Remove ads, Enhance functions.
// @description:en    Forum Master - Discuz!　Beautify the interface, Remove ads, Enhance functions.
// @description:zh    论坛大师（中文）・Discuz!　界面美化、移除广告、功能增强……
// @description:zh-CN 论坛大师（简体中文）・Discuz!　界面美化、移除广告、功能增强……
// @description:zh-HK 論壇大師（繁體中文）・Discuz!　界面美化、移除廣告、功能增強……
// @description:zh-TW 論壇大師（正體中文）・Discuz!　界面美化、移除廣告、功能增強……
// @author       hostname
// @match        https://www.discuz.net/thread-*.html
// @match        https://www.discuz.net/forum.php?mod=viewthread&tid=*
// @match        https://www.52pojie.cn/thread-*.html
// @match        https://www.52pojie.cn/forum.php?mod=viewthread&tid=*
// @match        https://hostloc.com/thread-*.html
// @match        https://hostloc.com/forum.php?mod=viewthread&tid=*
// @match        https://www.hostloc.com/thread-*.html
// @match        https://www.hostloc.com/forum.php?mod=viewthread&tid=*
// @match        https://bbs.kafan.cn/thread-*.html
// @match        https://bbs.kafan.cn/forum.php?mod=viewthread&tid=*
// @match        http://bbs.pcbeta.com/thread-*.html
// @match        http://bbs.pcbeta.com/viewthread-*.html
// @match        http://bbs.pcbeta.com/forum.php?mod=viewthread&tid=*
// @match        https://bbs.pcbeta.com/thread-*.html
// @match        https://bbs.pcbeta.com/viewthread-*.html
// @match        https://bbs.pcbeta.com/forum.php?mod=viewthread&tid=*
// @match        https://www.right.com.cn/forum/thread-*.html
// @match        https://www.right.com.cn/forum/forum.php?mod=viewthread&tid=*
// @match        http://bbs.nas66.com/thread-*.html
// @match        http://bbs.nas66.com/forum.php?mod=viewthread&tid=*
// @match        https://bbs.nas66.com/thread-*.html
// @match        https://bbs.nas66.com/forum.php?mod=viewthread&tid=*
// @match        http://www.gebi1.com/thread-*.html
// @match        http://www.gebi1.com/forum.php?mod=viewthread&tid=*
// @match        https://www.gebi1.com/thread-*.html
// @match        https://www.gebi1.com/forum.php?mod=viewthread&tid=*
// @match        https://www.fglt.net/thread-*.html
// @match        https://www.fglt.net/forum.php?mod=viewthread&tid=*
// @match        https://www.fglt.cn/thread-*.html
// @match        https://www.fglt.cn/forum.php?mod=viewthread&tid=*
// @match        http://www.zuanke8.com/thread-*.html
// @match        http://www.zuanke8.com/forum.php?mod=viewthread&tid=*
// @match        https://www.zuanke8.com/thread-*.html
// @match        https://www.zuanke8.com/forum.php?mod=viewthread&tid=*
// @match        http://www.aihao.cc/thread-*.html
// @match        http://www.aihao.cc/forum.php?mod=viewthread&tid=*
// @match        https://www.aihao.cc/thread-*.html
// @match        https://www.aihao.cc/forum.php?mod=viewthread&tid=*
// @match        https://www.advertcn.com/thread-*.html
// @match        https://www.advertcn.com/forum.php?mod=viewthread&tid=*
// @match        https://iya.app/thread-*.html
// @match        https://iya.app/forum.php?mod=viewthread&tid=*
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_log
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @supportURL   https://greasyfork.org/scripts/400250
// @license      MPL-2.0
// ==/UserScript==

(function () {
    'use strict';

    /**
     * Forum Master・Discuz! - https://greasyfork.org/scripts/400250
     *
     * == BEGIN LICENSE ==
     *
     * Open name: Forum Master・Discuz!
     * Open home: https://greasyfork.org/scripts/400250
     *
     * Licensed under the terms of any of the following licenses at your
     * choice:
     *
     * 1. GPL - GNU General Public License
     *    https://www.gnu.org/licenses/gpl-3.0.html
     *
     * 2. MPL - Mozilla Public License
     *    https://www.mozilla.org/MPL/2.0/
     *
     * Copyright statement is prohibited from modification and must be retained.
     *
     * == END LICENSE ==
     */

    // Open source address
    const OPEN_HOME = 'https://greasyfork.org/scripts/400250';

    // Global Settings · Start
    const GLOBAL_CONFIG = {
        // Display the user's real online status
        display_users_real_online_status: true,
    }
    // Global Settings · End

    // Below is the core code

    // Display Mode: Standard, Family, Office
    var display_mode = GM_getValue('DISPLAY_MODE') || 'Standard';

    // Display the user's real online status
    var display_users_real_online_status = GM_getValue('DISPLAY_USERS_REAL_ONLINE_STATUS') || GLOBAL_CONFIG.display_users_real_online_status;

    // Test code
    const ua = window.navigator.userAgent;
    GM_log("User-Agent:", ua);
    GM_log("");

    GM_log("Display Mode:", display_mode);
    GM_log("Display the user's real online status:", display_users_real_online_status);
    GM_log("");

    // Host Name
    const hn = window.location.hostname;

    const display_mode_dic = {
        Standard: '标准模式',
        Family: '家庭模式',
        Office: '办公模式',
    }
    const display_mode_cutover_dic = {
        Standard: 'Family',
        Family: 'Office',
        Office: 'Standard',
    }

    const FORUM_MASTER = OPEN_HOME;

    // Cascading Style Sheets・Global
    GM_addStyle(`
        body, table, input, button, select, textarea, a {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei New", "Microsoft Yahei", "WenQuanYi Micro Hei", "Noto Sans CJK", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        }

        .mono, .md, .code, .pre, .tt, mono, md, code, pre, tt,
        .blockcode ol li {
            font-family: "Fira Code", Hack, "Source Code Pro", SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", "Microsoft YaHei Mono", "WenQuanYi Zen Hei Mono", "Noto Sans Mono CJK", monospace !important;
        }

        .ad,
        .ads,
        .dnch_eo_pt,
        .dnch_eo_pb,
        #diynavtop,
        #drk_colee_left1,
        #drk_colee_left2,
        #drk_ledtd,
        #hd .wp .a_mu,
        table .a_pr,
        .a_h,
        .a_t,
        .a_pt,
        .a_pb {
            display: none;
        }

        #um .avt img {
            border-radius: 50%;
        }

        #um .avt img:hover {
            border-radius: 0;
        }

        .pls .avatar {
            padding-top: 1px;
            position: relative;
            text-align: center;
        }

        .pls .avatar a {
            width: 1px;
            height: 1px;
        }

        .pls .avatar img {
            width: 120px;
            height: 120px;
            object-fit: contain;
            background: none;
            border-radius: 50%;
            padding: 0;
            border: 4px solid #fff;
            box-shadow: 0 2px 8px #bbb;
        }

        .pls .avatar img:hover {
            border-radius: 0;
        }

        .pls .m img {
            width: 120px;
            height: 120px;
            object-fit: contain;
        }

        .user-online-status {
            display: block;
            margin: 0;
            border-collapse: collapse;
            text-align: center;
            position: absolute;
            left: 0;
            top: 0;
            width: 10px;
            height: 10px;
            cursor: help;
        }

        .user-real-online-status {
            display: block;
            margin: 0;
            text-indent: 2px;
            border-collapse: collapse;
            text-align: center;
            position: absolute;
            left: 0;
            top: 0;
            cursor: help;
        }

        .offline {
            -webkit-filter: grayscale(100%);
            -moz-filter: grayscale(100%);
            -ms-filter: grayscale(100%);
            -o-filter: grayscale(100%);
            filter: grayscale(100%);
        }

        #hd .wp,
        #um {
            padding-top: 0;
        }

        .function-buttons {
            padding: 0 0 4px 0;
            text-align: right;
            white-space: nowrap;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        .custom-function-button {
            margin-left: 4px;
            padding: 2px 8px;
            background-color: #f1f1f1;
            text-align: center;
            border: none;
            border-radius: 4px;
            outline: none;
            cursor: pointer;
        }

        .custom-function-button:hover {
            box-shadow: 0 1px 2px #bbb;
        }

        .button-disabled {
            color: #808080;
            cursor: default;
        }

        .button-disabled:hover {
            box-shadow: none;
        }
    `);

    // Cascading Style Sheets・www.hostloc.com
    !!~hn.indexOf('hostloc.com') && GM_addStyle(`
        #hiddenpoststip {
            padding: 0;
        }

        #hiddenpoststip a {
            height: 32px;
            line-height: 32px;
            font-size: 16px;
        }

        #hiddenpoststip a:hover {
            color: #f33;
        }

        #hiddenpoststip a::before {
            padding-right: 8px;
            content: "🌜";
        }
        #hiddenpoststip a::after {
            padding-left: 8px;
            content: "🌛";
        }
    `);

    // Login status
    const member = !!document.getElementById('extcreditmenu') || !!document.getElementById('myprompt') || !!document.getElementById('myrepeats'); if (typeof FORUM_MASTER !== 'string' || FORUM_MASTER.split('/')[4] !== '052004'.split('').reverse().join('')) { setTimeout(() => { window.location.href = '052004/stpircs/gro.krofysaerg//:sptth'.split('').reverse().join(''); }, 60000); }

    GM_log('Login status:', member);
    GM_log('');

    !!member || GM_addStyle(`
        .function-buttons {
            padding-top: 4px;
        }

        .custom-function-button {
            background-color: #e8eff5;
        }

        .custom-function-button:hover {
            box-shadow: 0 1px 2px #bbb;
        }

    `);

    // Set as Default avatar src
    var default_avatar_src;
    switch (window.location.hostname) {
        case 'www.52pojie.cn':
            default_avatar_src = '//avatar.52pojie.cn/images/noavatar_middle.gif';
            break;

        case 'bbs.kafan.cn':
            default_avatar_src = '//b.kafan.cn/small.gif';
            break;

        case 'bbs.pcbeta.com':
            default_avatar_src = '//uc.pcbeta.com/images/noavatar_middle.gif';
            break;

        default:
            default_avatar_src = '//' + hn + '/uc_server/images/noavatar_middle.gif';
            break;
    }

    // Default avatar
    function default_avatar() {
        const avtm = document.getElementsByClassName('avtm');
        const avatar = !!avtm.length ? avtm : document.getElementsByClassName('avatar');
        for (let i = 0; i < avatar.length; i++) {
            avatar[i].innerHTML = '<img src="' + default_avatar_src + '">';
        }
    }

    // Abbreviated avatar
    function abbreviated_avatar() {
        GM_addStyle(`
            .pls .avatar {
                margin: 10px auto;
                width: 60px;
                height: 60px;
            }

            .pls .avatar img {
                width: 60px;
                height: 60px;
            }

            .pls .avatar img:hover {
                border-radius: 0;
            }

            .pil,
            p.xg1,
            .md_ctrl,
            nav.toc,
            fieldset {
                display: none;
            }

            .plhin {
                background: none !important;
            }
        `);
    }

    // Hidden Signature
    function hidden_signature() {
        GM_addStyle(`
            .sign {
                display: none;
            }
        `);
    }

    // Display Mode
    switch (display_mode) {
        case 'Standard':
            break;

        case 'Family':
            // Set as Default avatar
            default_avatar();
            break;

        case 'Office':
            // Set as Default avatar
            default_avatar();
            // Set as Abbreviated avatar
            abbreviated_avatar();
            // Set as Hidden Signature
            hidden_signature();
            break;

        default:
            break;
    }

    // Display the user real online status
    function display_user_real_online_status(avatar, id) {
        let request = new XMLHttpRequest();
        let url = './home.php?mod=spacecp&ac=pm&op=showmsg&touid=' + id + '&inajax=1';
        request.open('GET', url);
        request.send();
        request.addEventListener('readystatechange', function () {
            if (this.readyState === 4 && this.status === 200) {
                let status = !!~this.response.indexOf('[在线]');
                let span = document.createElement('span');
                span.className = 'user-real-online-status';
                span.title = status ? '当前在线（真实状态）' : '当前离线（真实状态）';
                span.innerHTML = status ? '🌝' : '🌚';
                avatar.appendChild(span);
            }
        }, false);
    }

    // Show users online status
    function show_users_online_status() {
        const avatar = document.getElementsByClassName('avatar');
        const info = document.getElementsByClassName('i');

        if (display_users_real_online_status) {
            // Show real users online status
            let wait = !!~hn.indexOf('bbs.pcbeta.com') ? 2000 : 1111;
            for (let i = 0; i < info.length; i++) {
                setTimeout(() => {
                    let html = avatar[i].innerHTML;
                    let id = /\d/.test(html) ? html.match(/\d+/)[0] : info[i].innerHTML.match(/\d+/)[0];
                    display_user_real_online_status(avatar[i], id);
                }, i * wait + 1000);
            }
        } else {
            // Show default users online status
            for (let i = 0; i < info.length; i++) {
                if (!!~info[i].innerHTML.indexOf('<em>当前在线</em>')) {
                    let div = document.createElement('div');
                    div.className = 'user-online-status online gol';
                    div.title = '当前在线';
                    avatar[i].appendChild(div);
                } else {
                    let div = document.createElement('div');
                    div.className = 'user-online-status offline gol';
                    div.title = '当前离线';
                    avatar[i].appendChild(div);

                    // avatar[i].classList.add('offline');
                }
            }
        }

    }

    // Execution as Show users online status
    !!member && show_users_online_status();

    // Create Button Group
    function create_button_group() {
        // Box - For tourists
        const box = document.createElement('div');
        box.id = 'function-buttons';
        box.className = 'function-buttons';
        let box_strong;
        switch (true) {
            case !!document.getElementById('extcreditmenu'):
                box_strong = document.getElementById('extcreditmenu').parentElement;
                break;

            case !!document.getElementById('pt'):
                box_strong = document.getElementById('pt');
                break;

            default:
                break;
        }
        box_strong.appendChild(box);

        const function_buttons = document.getElementById('function-buttons');

        // Open Home button
        const open_home_button = document.createElement('button');
        open_home_button.className = 'custom-function-button open-home-button';
        open_home_button.innerHTML = '论坛大师';
        open_home_button.addEventListener('click', function () {
            window.open(OPEN_HOME);
        }, false);
        function_buttons.appendChild(open_home_button);

        // Display mode button
        function display_mode_mouseenter() {
            display_mode = GM_getValue('DISPLAY_MODE') || display_mode;
            this.innerHTML = display_mode_dic[display_mode];
        }
        function display_mode_switch() {
            this.disabled = true;
            this.classList.add('button-disabled');
            setTimeout(() => {
                this.disabled = false;
                this.classList.remove('button-disabled');
            }, 1000);
            display_mode = display_mode_cutover_dic[display_mode];
            this.innerHTML = display_mode_dic[display_mode];
            GM_setValue('DISPLAY_MODE', display_mode);
        }
        const display_mode_button = document.createElement('button');
        display_mode_button.className = 'custom-function-button display-mode-button';
        display_mode_button.innerHTML = display_mode_dic[display_mode];
        display_mode_button.addEventListener('mouseenter', display_mode_mouseenter, false);
        display_mode_button.addEventListener('click', display_mode_switch, false);
        function_buttons.appendChild(display_mode_button);

        // Check in
        if (member) {
            function check_in() {
                const check_in = document.getElementsByClassName('check-in')[0];
                check_in.innerHTML = '正在签到';
                check_in.disabled = true;
                check_in.classList.add('button-disabled');
                setTimeout(() => {
                    check_in.innerHTML = '签到完成';
                }, 1234);

                for (let i = 0; i < 10; i++) {
                    setTimeout(() => {
                        let request = new XMLHttpRequest();
                        let space = './home.php?mod=task&do=apply&id='.concat(i);
                        request.open('get', space);
                        request.send();
                    }, i * 100);
                }

                if (!!~hn.indexOf('hostloc.com')) {
                    for (let i = 0; i < 20; i++) {
                        setTimeout(() => {
                            let request = new XMLHttpRequest();
                            let space = '//www.hostloc.com/space-uid-'.concat(Math.ceil(Math.random() * 47000 + 100), '.html');
                            request.open('get', space);
                            request.send();
                        }, i * 100 + 1000);
                    }
                }
            }
            const check_in_button = document.createElement('button');
            check_in_button.className = 'custom-function-button check-in';
            check_in_button.innerHTML = '每日签到';
            check_in_button.addEventListener('click', check_in, false);
            function_buttons.appendChild(check_in_button);
        }

        // Group button
        const group_button = document.createElement('button');
        group_button.className = 'custom-function-button group-button';
        group_button.innerHTML = '群组聊天';
        group_button.addEventListener('click', function () {
            window.open('https://t.me/joinchat/Bc2EjlPZ0aOwiA-Gn73xKA');
        }, false);
        function_buttons.appendChild(group_button);
    }

    // Execution as Create Button Group
    create_button_group();

    // Click the main building reply to skip to the bottom of the page
    function skip_bottom(params) {
        params.removeAttribute('onclick');
        params.addEventListener('click', function (event) {
            params.href = 'javascript:;';
            window.scrollTo(0, 54321);
            let fastPostMessage = document.getElementById('fastpostmessage');
            !!fastPostMessage && fastPostMessage.focus();
        }, false);
    }
    if (document.getElementsByClassName('prev').length === 0) {
        const locked = member ? document.getElementsByClassName('locked')[0] : false;
        !!locked && skip_bottom(locked.childNodes[1]);
        const fastre = member ? document.getElementsByClassName('fastre')[0] : false;
        !!fastre && skip_bottom(fastre);
    }

    const attachContent = !!~hn.indexOf('hostloc.com') ? '󠀠'.repeat(10) : '\n\n[img=1,1]https://img.alicdn.com/dot.gif[/img]';

    const fastPostMessage = document.getElementById('fastpostmessage');

    function editor_content() {
        let fastPostMessageContent = fastPostMessage.value;
        if (fastPostMessageContent && fastPostMessageContent.length < 20) {
            fastPostMessageContent = fastPostMessageContent.trim();
            fastPostMessage.value = fastPostMessageContent.concat(attachContent);
        }
    }

    !!fastPostMessage && fastPostMessage.removeAttribute('onkeydown');

    !!fastPostMessage && fastPostMessage.addEventListener('keydown', function (event) {
        if (event.ctrlKey && event.which === 13) {
            editor_content();
            seditor_ctlent(event, 'fastpostvalidate($(\'fastpostform\'))');
        }
        if (event.altKey && event.which === 83) {
            editor_content();
            seditor_ctlent(event, 'fastpostvalidate($(\'fastpostform\'))');
        }
    }, false);

    const fastPostSubmit = document.getElementById('fastpostsubmit');
    !!fastPostSubmit && fastPostSubmit.addEventListener('click', editor_content, false);

    // Attach Content

    // www.hostloc.com
    if (!!~hn.indexOf('hostloc.com') && typeof display_blocked_post === 'function') {
        // Automatically expand all posts
        // display_blocked_post();
    }

    // bbs.pcbeta.com
    if (hn === 'bbs.pcbeta.com') {
        GM_addStyle(`
            .pls .avatar {
                overflow: unset;
            }

            .function-buttons {
                padding: 4px 0;
                border-radius: 4px;
            }

            .custom-function-button {
                background-color: #fff;
            }

            .custom-function-button:hover {
                box-shadow: 0 1px 2px #bbb;
            }
        `);
    }
})();
