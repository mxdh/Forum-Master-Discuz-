// ==UserScript==
// @name         Forum Master・Discuz!
// @name:en      Forum Master・Discuz!
// @name:zh-CN   论坛大师・Discuz!
// @name:zh-TW   論壇大師・Discuz!
// @namespace    Forum Master・Discuz!
// @version      0.1.0
// @icon         https://www.discuz.net/favicon.ico
// @description  Forum Master - Discuz!　Beautify the interface, Remove ads, Enhance functions.
// @description:en    Forum Master - Discuz!　Beautify the interface, Remove ads, Enhance functions.
// @description:zh-CN 论坛大师（简体中文）・Discuz!　界面美化、移除广告、功能增强、回帖强显……
// @description:zh-TW 論壇大師（繁體中文）・Discuz!　界面美化、移除廣告、功能增強、回帖強顯……
// @author       hostname,mxdh
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
// @match        https://www.fgbbs.net/thread-*.html
// @match        https://www.fgbbs.net/forum.php?mod=viewthread&tid=*
// @match        http://www.zuanke8.com/thread-*.html
// @match        http://www.zuanke8.com/forum.php?mod=viewthread&tid=*
// @match        https://www.zuanke8.com/thread-*.html
// @match        https://www.zuanke8.com/forum.php?mod=viewthread&tid=*
// @match        http://www.aihao.cc/thread-*.html
// @match        http://www.aihao.cc/forum.php?mod=viewthread&tid=*
// @match        https://www.aihao.cc/thread-*.html
// @match        https://www.aihao.cc/forum.php?mod=viewthread&tid=*
// @grant        GM_addStyle
// @supportURL   https://github.com/mxdh/Forum-Master-Discuz-
// @license GPL-3.0
// ==/UserScript==

(function () {
    'use strict';

    // Global Settings
    const global_config = {
        // Text Beautification: true/false
        // 文本美化：true/false
        // 文字美化：true/false
        text_beautification: false,
        // Code Beautification: true/false
        // 代码美化：true/false
        // 程式碼美化：true/false
        code_beautification: true,
        // Display Mode: Standard, Family, Office
        // 显示模式：标准、家庭、办公
        // 顯示模式：標準、家庭、辦公
        display_mode: 'Standard',
        // Force Display: true/false
        // 回帖强显：true/false
        // 回帖強顯：true/false
        force_display: true
    }

    // Cascading Style Sheets・Global
    GM_addStyle(`
        .ads {
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
        }
    `);

    if (global_config.text_beautification === true) {
        GM_addStyle(`
            body, table, input, button, select, textarea, a {
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei New", "Microsoft Yahei", "WenQuanYi Micro Hei", "Noto Sans CJK", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
            }
        `)
    }

    if (global_config.code_beautification === true) {
        GM_addStyle(`.mono, .md, .code, .pre, .tt, mono, md, code, pre, tt,
            .mono, .md, .code, .pre, .tt, mono, md, code, pre, tt,
            .blockcode ol li {
                font-family: "Fira Code", Hack, "Source Code Pro", SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", "Microsoft YaHei Mono", "WenQuanYi Zen Hei Mono", "Noto Sans Mono CJK", monospace !important;
            }
        `)
    }

    // Cascading Style Sheets・www.52pojie.cn
    GM_addStyle(`
        .dnch_eo_pt,
        .dnch_eo_pb {
            display: none;
        }
    `);

    // Cascading Style Sheets・www.hostloc.com
    GM_addStyle(`
        .a_h,
        .a_t,
        .a_pt,
        .a_pb {
            display: none;
        }

        .custom-function-button {
            margin-right: 5px !important;
            padding: 2px 8px;
            background-color: #f1f1f1;
            border: none;
            border-radius: 4px;
            outline: none;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        .custom-function-button:hover {
            box-shadow: 0 1px 2px #bbb;
        }

        .check-in-disabled {
            color: #808080;
            cursor: default;
        }

        .check-in-disabled:hover {
            box-shadow: none;
        }

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

        .user-status {
            position: absolute;
            left: 0;
            top: 0;
            width: 10px;
            height: 10px;
            cursor: help;
        }

        .offline {
            -webkit-filter: grayscale(100%);
            -moz-filter: grayscale(100%);
            -ms-filter: grayscale(100%);
            -o-filter: grayscale(100%);
            filter: grayscale(100%);
        }
    `);

    // Cascading Style Sheets・bbs.pcbeta.com
    GM_addStyle(`
        #diynavtop {
            display: none;
        }
    `);

    // Cascading Style Sheets・www.fglt.net
    GM_addStyle(`
        #drk_colee_left1,
        #drk_colee_left2,
        #drk_ledtd,
        #hd .wp .a_mu,
        table .a_pr {
            display: none;
        }
    `);
    const website = window.location.href;
    !!~website.indexOf('&extra=') && !!~website.indexOf('&mobile=') && window.location.replace(website.split('&extra=')[0]);

    // Member
    const member = !!document.getElementById('extcreditmenu');

    // Set as Default avatar
    function default_avatar(src) {
        const avtm = document.getElementsByClassName('avtm');
        for (let i = 0; i < avtm.length; i++) {
            avtm[i].innerHTML = '<img src="' + src + '">';
        }
    }

    // Hidden Signature
    function hidden_signature() {
        GM_addStyle(`
            .sign {
                display: none;
            }
    `);
    }

    function show_status() {
        const avatar = document.getElementsByClassName('avatar');
        const info = document.getElementsByClassName('i');

        for (let i = 0; i < info.length; i++) {
            if (!!~info[i].innerHTML.indexOf('<em>当前在线</em>')) {
                let div = document.createElement('div');
                div.className = 'user-status online gol';
                avatar[i].appendChild(div);
            } else {
                let div = document.createElement('div');
                div.className = 'user-status offline gol';
                avatar[i].appendChild(div);

                // avatar[i].classList.add('offline');
            }
        }
    }

    // www.52pojie.cn
    if (window.location.hostname === 'www.52pojie.cn') {
        // Display Mode
        switch (global_config.display_mode) {
            case 'Standard':
            case '标准':
            case '標準':
                break;

            case 'Family':
            case '家庭':
                default_avatar('//avatar.52pojie.cn/images/noavatar_middle.gif');
                break;

            case 'Office':
            case '办公':
            case '辦公':
                default_avatar('//avatar.52pojie.cn/images/noavatar_middle.gif');
                hidden_signature();
                break;

            default:
                break;
        }

        // Show users online status
        if (member) show_status();
    }

    // www.hostloc.com
    if (window.location.hostname === 'www.hostloc.com') {
        // Display Mode
        switch (global_config.display_mode) {
            case 'Standard':
            case '标准':
            case '標準':
                break;

            case 'Family':
            case '家庭':
                default_avatar('//www.hostloc.com/uc_server/images/noavatar_middle.gif');
                break;

            case 'Office':
            case '办公':
            case '辦公':
                default_avatar('//www.hostloc.com/uc_server/images/noavatar_middle.gif');
                hidden_signature();
                break;

            default:
                break;
        }

        // Show users online status
        if (member) show_status();

        // Create Pipe
        function create_pipe() {
            const span = document.createElement('span');
            span.className = 'pipe';
            span.innerHTML = '|';
            document.getElementById('extcreditmenu').parentElement.prepend(span);
        }

        // Check in
        if (member) {
            function check_in() {
                const check_in = document.getElementsByClassName('check-in')[0];
                check_in.innerHTML = '正在签到';
                check_in.disabled = true;
                check_in.classList.add('check-in-disabled');
                setTimeout(() => {
                    check_in.innerHTML = '签到完成';
                }, 1234);

                for (let i = 0; i < 20; i++) {
                    setTimeout(() => {
                        let request = new XMLHttpRequest();
                        let space = '//www.hostloc.com/space-uid-'.concat(Math.ceil(Math.random() * 47000 + 100), '.html');
                        request.open('get', space);
                        request.send();
                    }, i * 100);
                }
            }
            create_pipe();
            const check_in_button = document.createElement('button');
            check_in_button.className = 'custom-function-button check-in';
            check_in_button.innerHTML = '每日签到';
            check_in_button.addEventListener('click', check_in, false);
            document.getElementById('extcreditmenu').parentElement.prepend(check_in_button);
        }

        // Switch Mode
        function switch_mode() {
            alert('切换模式功能正在开发……');
        }
        create_pipe();
        const switch_mode_button = document.createElement('button');
        switch_mode_button.className = 'custom-function-button switch-mode';
        let html = '切换模式';
        switch (global_config.display_mode) {
            case 'Standard':
            case '标准':
            case '標準':
                html = '标准模式';
                break;

            case 'Family':
            case '家庭':
                html = '家庭模式';
                break;

            case 'Office':
            case '办公':
            case '辦公':
                html = '办公模式';
                break;

            default:
                break;
        }
        switch_mode_button.innerHTML = html;
        switch_mode_button.addEventListener('click', switch_mode, false);
        document.getElementById('extcreditmenu').parentElement.prepend(switch_mode_button);

        // Home button
        create_pipe();
        const home_button = document.createElement('button');
        home_button.className = 'custom-function-button home-button';
        home_button.innerHTML = '论坛大师';
        home_button.addEventListener('click', function () {
            window.open(HOME);
        }, false);
        document.getElementById('extcreditmenu').parentElement.prepend(home_button);
    }


    // bbs.pcbeta.com
    if (window.location.hostname === 'bbs.pcbeta.com') {
        // Member
        const member = !!document.getElementById('myrepeats');

        // Display Mode
        const avatar = document.getElementsByClassName('avatar');
        switch (global_config.display_mode) {
            case 'Standard':
            case '标准':
            case '標準':
                break;

            case 'Family':
            case '家庭':
                // default_avatar('//uc.pcbeta.com//images/noavatar_middle.gif');
                // Set as Default avatar
                for (let i = 0; i < avatar.length - 1; i++) {
                    avatar[i].innerHTML = '<img src="//uc.pcbeta.com//images/noavatar_middle.gif">';
                }
                break;

            case 'Office':
            case '办公':
            case '辦公':
                // default_avatar('//uc.pcbeta.com//images/noavatar_middle.gif');
                // Set as Default avatar
                for (let i = 0; i < avatarOffice.length - 1; i++) {
                    avatar[i].innerHTML = '<img src="//uc.pcbeta.com//images/noavatar_middle.gif">';
                }
                hidden_signature();
                break;

            default:
                break;
        }

        // Show users online status
        if (member) show_status();
    }

    // bbs.kafan.cn
    if (window.location.hostname === 'bbs.kafan.cn') {
        // Member
        const member = !!document.getElementById('myprompt');

        // Display Mode
        switch (global_config.display_mode) {
            case 'Private':
            case '私人':
                break;

            case 'Family':
            case '家庭':
                default_avatar('//b.kafan.cn/5/middle.gif');
                break;

            case 'Office':
            case '办公':
            case '辦公':
                default_avatar('//b.kafan.cn/5/middle.gif');
                hidden_signature();
                break;

            default:
                break;
        }

        // Show users online status
        if (member) show_status();
    }

    if (global_config.force_display === true) {
        const fastPostMessage = document.getElementById('fastpostmessage');

        function editor_content() {
            let fastPostMessageContent = fastPostMessage.value;
            if (fastPostMessageContent && fastPostMessageContent.length < 20) {
                fastPostMessageContent = fastPostMessageContent.trim();
                switch (window.location.hostname) {
                    case 'bbs.kafan.cn': break;
                    case 'www.hostloc.com':
                        fastPostMessage.value = fastPostMessageContent.concat('󠀠'.repeat(10));  // Zero Width Space
                        break;
                    default:
                        fastPostMessage.value = fastPostMessageContent.concat('\n\n', attachContent);
                }
            }
        }

        !!fastPostMessage && fastPostMessage.removeAttribute('onkeydown');

        !!fastPostMessage && fastPostMessage.addEventListener('keydown', function (event) {
            if (event.ctrlKey && event.which === 13) {  // Ctrl+Enter
                editor_content();
                seditor_ctlent(event, 'fastpostvalidate($(\'fastpostform\'))');
            }
            if (event.altKey && event.which === 83) {  // Alt+S
                editor_content();
                seditor_ctlent(event, 'fastpostvalidate($(\'fastpostform\'))');
            }
        }, false);

        document.getElementById('fastpostsubmit').addEventListener('click', editor_content, false);
    }
})();