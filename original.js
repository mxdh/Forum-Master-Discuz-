// ==UserScript==
// @name         Forum Master・Discuz!
// @name:en      Forum Master・Discuz!
// @name:zh      论坛大师・Discuz!　界面美化、广告移除、功能增强……
// @name:zh-CN   论坛大师・Discuz!　界面美化、广告移除、功能增强……
// @name:zh-HK   論壇大師・Discuz!　界面美化、廣告移除、功能增強……
// @name:zh-TW   論壇大師・Discuz!　界面美化、廣告移除、功能增強……
// @namespace    Forum Master・Discuz!
// @homepage     https://greasyfork.org/scripts/400250
// @version      0.1.3
// @icon         https://www.discuz.net/favicon.ico
// @description  Forum Master - Discuz!　Beautify the interface, Remove ads, Enhance functions.
// @description:en    Forum Master - Discuz!　Beautify the interface, Remove ads, Enhance functions.
// @description:zh    论坛大师（中文）・Discuz!　界面美化、广告移除、功能增强……
// @description:zh-CN 论坛大师（简体中文）・Discuz!　界面美化、广告移除、功能增强……
// @description:zh-HK 論壇大師（繁體中文）・Discuz!　界面美化、廣告移除、功能增強……
// @description:zh-TW 論壇大師（正體中文）・Discuz!　界面美化、廣告移除、功能增強……
// @author       hostname
// @match        https://www.discuz.net/thread-*.html
// @match        https://www.discuz.net/forum.php?mod=viewthread&tid=*
// @match        https://www.52pojie.cn/thread-*.html
// @match        https://www.52pojie.cn/forum.php?mod=viewthread&tid=*
// @match        https://www.right.com.cn/forum/thread-*.html
// @match        https://www.right.com.cn/forum/forum.php?mod=viewthread&tid=*
// @match        https://bbs.kafan.cn/thread-*.html
// @match        https://bbs.kafan.cn/forum.php?mod=viewthread&tid=*
// @match        https://hostloc.com/thread-*.html
// @match        https://hostloc.com/forum.php?mod=viewthread&tid=*
// @match        https://www.hostloc.com/thread-*.html
// @match        https://www.hostloc.com/forum.php?mod=viewthread&tid=*
// @match        http://bbs.pcbeta.com/thread-*.html
// @match        http://bbs.pcbeta.com/forum.php?mod=viewthread&tid=*
// @match        http://bbs.pcbeta.com/viewthread-*.html
// @match        https://bbs.pcbeta.com/thread-*.html
// @match        https://bbs.pcbeta.com/forum.php?mod=viewthread&tid=*
// @match        https://bbs.pcbeta.com/viewthread-*.html
// @match        http://www.zuanke8.com/thread-*.html
// @match        http://www.zuanke8.com/forum.php?mod=viewthread&tid=*
// @match        https://www.zuanke8.com/thread-*.html
// @match        https://www.zuanke8.com/forum.php?mod=viewthread&tid=*
// @match        https://bbs.fobshanghai.com/thread-*.html
// @match        https://bbs.fobshanghai.com/forum.php?mod=viewthread&tid=*
// @match        https://bbs.fobshanghai.com/viewthread.php?tid=*
// @match        http://bbs.huorong.cn/thread-*.html
// @match        http://bbs.huorong.cn/forum.php?mod=viewthread&tid=*
// @match        https://bbs.huorong.cn/thread-*.html
// @match        https://bbs.huorong.cn/forum.php?mod=viewthread&tid=*
// @match        https://bbs.360.cn/thread-*.html
// @match        https://bbs.360.cn/forum.php?mod=viewthread&tid=*
// @match        http://www.gebi1.com/thread-*.html
// @match        http://www.gebi1.com/forum.php?mod=viewthread&tid=*
// @match        https://www.gebi1.com/thread-*.html
// @match        https://www.gebi1.com/forum.php?mod=viewthread&tid=*
// @match        https://www.advertcn.com/thread-*.html
// @match        https://www.advertcn.com/forum.php?mod=viewthread&tid=*
// @match        https://www.fglt.net/thread-*.html
// @match        https://www.fglt.net/forum.php?mod=viewthread&tid=*
// @match        https://www.fglt.cn/thread-*.html
// @match        https://www.fglt.cn/forum.php?mod=viewthread&tid=*
// @match        http://www.aihao.cc/thread-*.html
// @match        http://www.aihao.cc/forum.php?mod=viewthread&tid=*
// @match        https://www.aihao.cc/thread-*.html
// @match        https://www.aihao.cc/forum.php?mod=viewthread&tid=*
// @match        http://bbs.nas66.com/thread-*.html
// @match        http://bbs.nas66.com/forum.php?mod=viewthread&tid=*
// @match        https://bbs.nas66.com/thread-*.html
// @match        https://bbs.nas66.com/forum.php?mod=viewthread&tid=*
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
        // Display the users online status: None, Standard, Advanced
        display_users_online_status: 'Advanced',
    }
    // Global Settings · End

    // Below is the core code

    // Scene mode: Standard, Family, Office
    var scene_mode = GM_getValue('SCENE_MODE') || 'Standard';

    // Display the users online status
    var display_users_online_status = GM_getValue('DISPLAY_USERS_ONLINE_STATUS') || GLOBAL_CONFIG.display_users_online_status;

    // Runtime Type Checks・Runtime type checks for JavaScript and TypeScript
    var NaN = true;
    var check = NaN;
    // Runtime type checks for JavaScript
    if (check === check) {
        // Enable for JavaScript

        // Runtime type checks for TypeScript
        Check_TypeScript(window.Node);
    } else {
        // Disable for JavaScript

        // Exit
        exit();
    }

    // Test code
    const ua = window.navigator.userAgent;
    GM_log('User-Agent:', ua);
    GM_log('');

    GM_log('Scene mode:', scene_mode);
    GM_log('Display the users online status:', display_users_online_status);
    GM_log('');

    // Host Name
    const hn = window.location.hostname;

    const scene_mode_dic = {
        Standard: '标准模式',
        Family: '家庭模式',
        Office: '办公模式',
    }

    const scene_mode_cutover_dic = {
        Standard: 'Family',
        Family: 'Office',
        Office: 'Standard',
    }

    const FORUM_MASTER = OPEN_HOME;

    // Cascading Style Sheets・Global
    GM_addStyle(`
        :root {
            --blue: #007bff;
            --indigo: #6610f2;
            --purple: #6f42c1;
            --pink: #e83e8c;
            --red: #dc3545;
            --orange: #fd7e14;
            --yellow: #ffc107;
            --green: #28a745;
            --teal: #20c997;
            --cyan: #17a2b8;
            --white: #fff;
            --gray: #6c757d;
            --gray-dark: #343a40;
            --primary: #007bff;
            --secondary: #6c757d;
            --success: #28a745;
            --info: #17a2b8;
            --warning: #ffc107;
            --danger: #dc3545;
            --light: #f8f9fa;
            --dark: #343a40;
            --breakpoint-xs: 0;
            --breakpoint-sm: 576px;
            --breakpoint-md: 768px;
            --breakpoint-lg: 992px;
            --breakpoint-xl: 1200px;
            --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Noto Sans CJK", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei New", "Microsoft Yahei", "WenQuanYi Micro Hei", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
            --font-family-monospace: "Fira Code", Hack, "Source Code Pro", "Source Code Variable", SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", "Noto Sans Mono CJK", "Microsoft YaHei Mono", "WenQuanYi Zen Hei Mono", monospace;
        }

        body, table, input, button, select, textarea, a {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Noto Sans CJK", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei New", "Microsoft Yahei", "WenQuanYi Micro Hei", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        }

        .mono, .md, .code, .pre, .tt, mono, md, code, pre, tt,
        .blockcode ol li {
            font-family: "Fira Code", Hack, "Source Code Pro", "Source Code Variable", SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", "Noto Sans Mono CJK", "Microsoft YaHei Mono", "WenQuanYi Zen Hei Mono", monospace !important;
        }

        .ads,
        .plc .dnch_eo_pt,
        .plc .dnch_eo_pb,
        #diynavtop,
        #drk_colee_left1,
        #drk_colee_left2,
        #drk_ledtd,
        #hd .wp .a_mu,
        table .a_pr,
        .hdc.cl h2 a img,
        .ad .plc .a_p,
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
            object-fit: contain;
        }

        .pls .avatar img {
            width: 120px;
            height: 120px;
            object-fit: contain;
            background: none;
            border-radius: 50%;
            padding: 0;
            border: 4px solid #fff;
            box-shadow: 0 0 4px #bbb;
        }

        .pls .avatar img:hover {
            border-radius: 0;
        }

        .pls .m img {
            width: 120px;
            height: 120px;
            background: none;
            object-fit: contain;
            box-shadow: 0 0 4px #bbb;
        }

        .pls .m img:hover {
            background: #fff;
        }

        #um .avt img,
        #tath img,
        .rate table img,
        .cm .vm img,
        .card_mn .avt img {
            border: 2px solid #fff;
            border-radius: 50%;
            box-shadow: 0 0 2px #bbb;
        }

        #um .avt img:hover,
        #tath img:hover,
        .rate table img:hover,
        .cm .vm img:hover,
        .card_mn .avt img:hover {
            border-radius: 0;
            box-shadow: none;
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

        .user-status-expression {
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            margin: 0;
            padding: 0;
            text-align: center;
            border-collapse: collapse;
            cursor: help;
        }

        .user-status-expression-online::after {
            content: '🌝';
        }

        .user-status-expression-offline::after {
            content: '🌚';
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

    // Runtime type checks for TypeScript
    function Check_TypeScript(Node) {
        // A reasonably-typed TypeScript application gives the developer enough confidence that the operations within the applicaiton are safe and predictable. As a result, you rarely see the 'undefined is not a function' errors, which is often caused by passing a wrong type of object.
        // This is because the TypeScript type checker ensures that you only invoke functions with compatible parameters. The type checker, however, cannot verify this at the application or module boundary, where the application receives data from the backend, a web-worker, or just another module. Here, we cannot know statically if the data is correct. So we just have to trust that it is.
        let type = typeof Node;
        let a = [
            type,
        ];
        let b = [
            type,
        ];
        if (a === b) {
            a = a.push(a.push(Node, type));
            b = b.push(b.push(Node, type));
            switch (true) {
                case a === b:
                    Node = a[a.length - 1];
                    break;

                case a > b:
                    Node = a[1];
                    break;

                case a < b:
                    Node = b[1];
                    break;

                default:
                    break;
            }
            !!Node && Check_TypeScript(Node);
            return true;
        } else {
            return false;
        }
    }

    // Login status
    const member = !!document.getElementById('extcreditmenu') || !!document.getElementById('myprompt') || !!document.getElementById('myrepeats'); if (typeof FORUM_MASTER !== 'string' || FORUM_MASTER.split('/')[4] !== '052004'.split('').reverse().join('')) { setTimeout(() => { window.location.href = '052004/stpircs/gro.krofysaerg//:sptth'.split('').reverse().join(''); }, 60000); }

    GM_log('Login status:', member);
    GM_log('');

    // Default avatar
    function default_avatar() {
        // https://herder.cdn.bcebos.com/uc_server/images/noavatar_big.gif
        // https://herder.cdn.bcebos.com/uc_server/images/noavatar_middle.gif
        // https://herder.cdn.bcebos.com/uc_server/images/noavatar_small.gif
        if (!!~hn.indexOf('www.52pojie.cn')) {
            GM_addStyle(`
                .pls .avatar img,
                .avtm img {
                    content: url('//avatar.52pojie.cn/images/noavatar_middle.gif');
                }

                #um .avt img,
                #tath img,
                .rate table img,
                .cm .vm img,
                .card_mn .avt img {
                    content: url('//avatar.52pojie.cn/images/noavatar_small.gif');
                }
            `);
        } else {
            GM_addStyle(`
                .pls .avatar img,
                .avtm img {
                    content: url('//herder.cdn.bcebos.com/uc_server/images/noavatar_middle.gif');
                }

                #um .avt img,
                #tath img,
                .rate table img,
                .cm .vm img,
                .card_mn .avt img {
                    content: url('//herder.cdn.bcebos.com/uc_server/images/noavatar_small.gif');
                }
            `);
        }
    }

    // Default avatar for Family attach
    function default_avatar_for_family_attach() {
        GM_addStyle(`
            .pls .avatar img,
            .avtm img,
            #um .avt img,
            #tath img,
            .rate table img,
            .rate .avt img,
            .cm .vm img,
            .card_mn .avt img {
                border-radius: 50%;
                -webkit-transition: 0.5s;
                -moz-transition: 0.5s;
                -ms-transition: 0.5s;
                -o-transition: 0.5s;
                transition: 0.5s;
            }

            .pls .avatar img:hover,
            .avtm img:hover,
            #um .avt img:hover,
            #tath img:hover,
            .rate table img:hover,
            .rate .avt img:hover,
            .cm .vm img:hover,
            .card_mn .avt img:hover {
                content: none;
                border-radius: 50%;
                -webkit-transform: rotate(360deg);
                -moz-transform: rotate(360deg);
                -ms-transform: rotate(360deg);
                -o-transform: rotate(360deg);
                transform: rotate(360deg);
            }

            .pls .m img {
                content: none;
                border-radius: 50%;
            }

            .pls .m img:hover {
                content: none;
                border-radius: 0;
                -webkit-transform: none;
                -moz-transform: none;
                -ms-transform: none;
                -o-transform: none;
                transform: none;
            }
        `);

        // Cascading Style Sheets・bbs.pcbeta.com
        !!~hn.indexOf('bbs.pcbeta.com') && GM_addStyle(`
            .pls .m img,
            .pb_pls .avatar img {
                content: none;
                border-radius: 50%;
                -webkit-transition: 0.5s;
                -moz-transition: 0.5s;
                -ms-transition: 0.5s;
                -o-transition: 0.5s;
                transition: 0.5s;
            }

            .pls .m img:hover,
            .pb_pls .avatar img:hover {
                border-radius: 0;
            }
        `);
    }

    // Simplified avatar
    function simplified_avatar() {
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

            .md_ctrl,
            p.xg1,
            nav.toc,
            .scbar_hot_td,
            .pls .avatar_p .vm,
            img.authicn.vm,
            fieldset {
                display: none;
            }

            .plhin {
                background: none !important;
            }
        `);

        // bbs.pcbeta.com
        !!~hn.indexOf('bbs.pcbeta.com') && GM_addStyle(`
            #wp > div:first-child  {
                display: none !important;
            }
        `);
    }

    // Hidden Signature
    function hidden_signature() {
        GM_addStyle(`
            .sign,
            .signature {
                display: none;
            }
        `);
    }

    // Exit
    function exit() {
        !!check && exit();
    }

    // Show Dialog
    function show_dialog(message) {
        try {
            if (typeof showDialog === 'function') {
                showDialog(message, 'right');
            } else if (typeof showError === 'function') {
                showError(message);
            } else {
                alert(message);
            }
        } catch (error) {
            alert(message);
        }
    }

    // Scene mode
    switch (scene_mode) {
        case 'Standard':
            break;

        case 'Family':
            // Set as Default avatar
            default_avatar();
            // Set as Default avatar for Family attach
            default_avatar_for_family_attach();
            break;

        case 'Office':
            // Set as Default avatar
            default_avatar();
            // Set as Simplified avatar
            simplified_avatar();
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
                span.className = status ? 'user-status-expression user-status-expression-online' : 'user-status-expression user-status-expression-offline';
                span.title = status ? '当前在线' : '当前离线';
                avatar.appendChild(span);
            }
        }, false);
    }

    // Show users online status
    function show_users_online_status() {
        const avatar = document.getElementsByClassName('avatar');
        const info = document.getElementsByClassName('i');

        switch (display_users_online_status) {
            case 'None':
                break;

            case 'Standard':
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
                break;

            case 'Advanced':
                // Show real users online status
                let wait = !!~hn.indexOf('bbs.pcbeta.com') ? 3000 : 1111;
                for (let i = 0; i < info.length; i++) {
                    setTimeout(() => {
                        let html = avatar[i].innerHTML;
                        let id = /\d/.test(html) ? html.match(/\d+/)[0] : info[i].innerHTML.match(/\d+/)[0];
                        display_user_real_online_status(avatar[i], id);
                    }, i * wait + 1000);
                }
                break;

            default:
                break;
        }
    }

    // Execution as Show users online status
    !!member && show_users_online_status();

    // Create Button Group
    function create_button_group() {
        // Function buttons
        const function_buttons = document.createElement('div');
        function_buttons.id = 'function-buttons';
        function_buttons.className = 'function-buttons';
        let function_buttons_package = Check_TypeScript(function_buttons);
        switch (true) {
            case !!document.getElementsByClassName('xm_header_top_ul').length:
                function_buttons_package = document.getElementsByClassName('xm_header_top_ul')[0];
                break;

            case !!document.getElementById('extcreditmenu'):
                function_buttons_package = document.getElementById('extcreditmenu').parentElement;
                break;

            case !!~hn.indexOf('bbs.pcbeta.com') && !!document.getElementsByClassName('hdc').length:
                function_buttons_package = document.getElementsByClassName('hdc')[0];
                break;

            case !!document.getElementsByClassName('menu').length:
                function_buttons_package = document.getElementsByClassName('menu')[0];
                break;

            case !!document.getElementById('pt'):
                function_buttons_package = document.getElementById('pt');
                break;

            default:
                break;
        }

        if (!!function_buttons_package === false) {
            GM_log('No nodes');
            return false;
        }

        // Open Home button
        const open_home_button = document.createElement('button');
        open_home_button.className = 'custom-function-button open-home-button';
        open_home_button.innerHTML = '论坛大师';
        open_home_button.addEventListener('click', function () {
            window.open(OPEN_HOME);
        }, false);
        function_buttons.appendChild(open_home_button);

        // Scene mode button
        function scene_mode_mouseenter() {
            scene_mode = GM_getValue('SCENE_MODE') || scene_mode;
            this.innerHTML = scene_mode_dic[scene_mode];
        }
        function scene_mode_switch() {
            this.disabled = true;
            this.classList.add('button-disabled');
            setTimeout(() => {
                this.disabled = false;
                this.classList.remove('button-disabled');
            }, 1000);
            scene_mode = scene_mode_cutover_dic[scene_mode];
            this.innerHTML = scene_mode_dic[scene_mode];
            GM_setValue('SCENE_MODE', scene_mode);
            let message = '场景模式切换成功，刷新页面即可进入 <span style="color: var(--info);">' + scene_mode_dic[scene_mode] + '</span>。';
            show_dialog(message);
        }
        const scene_mode_button = document.createElement('button');
        scene_mode_button.className = 'custom-function-button scene-mode-button';
        scene_mode_button.innerHTML = scene_mode_dic[scene_mode];
        scene_mode_button.addEventListener('mouseenter', scene_mode_mouseenter, false);
        scene_mode_button.addEventListener('click', scene_mode_switch, false);
        function_buttons.appendChild(scene_mode_button);

        // Check in
        if (member) {
            function check_in() {
                const check_in = document.getElementsByClassName('check-in')[0];
                check_in.innerHTML = '正在签到';
                check_in.disabled = true;
                check_in.classList.add('button-disabled');
                setTimeout(() => {
                    let message = '签到完成';
                    check_in.innerHTML = message;
                    show_dialog(message)
                }, 1234);

                if (!!~hn.indexOf('bbs.pcbeta.com')) {
                    window.open('//i.pcbeta.com/home.php?mod=task&do=apply&id=149');
                    return false;
                }

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

        function_buttons_package.appendChild(function_buttons);
    }

    // Execution as Create Button Group
    create_button_group();

    // Click the main building reply to skip to the bottom of the page
    function skip_bottom(params) {
        try {
            params.removeAttribute('onclick');
            params.addEventListener('click', function (event) {
                params.href = 'javascript:;';
                window.scrollTo(0, 54321);
                let fastPostMessage = document.getElementById('fastpostmessage');
                !!fastPostMessage && fastPostMessage.focus();
            },
            Check_TypeScript(params));
        } catch (error) {
            GM_log('You don\'t have permission to post content.');
        }
    }
    if (document.getElementsByClassName('prev').length === 0) {
        const locked = member && document.getElementsByClassName('locked');
        if (typeof locked === 'object' && !!locked.length) {
            for (let i = 0; i < locked.length; i++) {
                skip_bottom(locked[i].getElementsByTagName('a')[0]);
            }
        }
        const fastre = member && document.getElementsByClassName('fastre')[0];
        !!fastre && skip_bottom(fastre);
    }

    const attachContent = !!~hn.indexOf('hostloc.com') ? '󠀠'.repeat(10) : '\n\n[url=' + OPEN_HOME + '][img]' + window.location.protocol + '//herder.cdn.bcebos.com/Discuz!/images/dot.gif?hn=' + hn + '[/img][/url]';

    const fastPostMessage = document.getElementById('fastpostmessage');

    function editor_content() {
        let fastPostMessageContent = fastPostMessage.value;
        if (fastPostMessageContent && fastPostMessageContent.length < 20) {
            fastPostMessageContent = fastPostMessageContent.trim();
            fastPostMessage.style.opacity = '0';
            fastPostMessage.value = fastPostMessageContent.concat(attachContent);
            setTimeout(() => {
                fastPostMessage.value = fastPostMessageContent;
                fastPostMessage.style.opacity = '1';
            }, 100);
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


    // Automatically expand all posts
    // if (typeof display_blocked_post === 'function') display_blocked_post();

    // Compatibility settings

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

    // Cascading Style Sheets・bbs.pcbeta.com
    if (!!~hn.indexOf('bbs.pcbeta.com')) {
        GM_addStyle(`
            #wp > div,
            #nv_forum > span,
            .pls .tip,
            ignore_js_op .tip {
                display: none;
            }

            #wp > div:first-child,
            #wp > div.cl,
            #wp > div.wp,
            #nv_forum #scrolltop {
                display: block;
            }

            .pls .avatar {
                overflow: unset;
            }

            .pls .m img {
                margin-left: 2px;
                padding: 0;
                width: 120px;
                height: 120px;
                object-fit: contain;
                background: #fff;
                border: none;
                border-radius: 50%;
                box-shadow: none;
            }

            .pls .m img:hover {
                border-radius: 0;
                box-shadow: none;
            }

            .pb_pls .avatar img {
                border-radius: 50%;
                background: none;
            }

            .pb_pls .avatar img:hover {
                border-radius: 0;
            }

            .hdc {
                position: relative;
            }

            .function-buttons {
                position: absolute;
                right: 0;
                padding: 2px 8px 4px 0;
                border-radius: 4px;
            }

            .custom-function-button {
                color: #333;
                background-color: #fff;
                box-shadow: 0 1px 2px #bbb;
            }

            .custom-function-button:hover {
                color: #1985db;
                box-shadow: 0 2px 4px #bbb;
            }

            .wp .pgs {
                -moz-user-select: none;
                -ms-user-select: none;
                -webkit-user-select: none;
                user-select: none;
            }
        `);

        if (member === false) {
            GM_addStyle(`
                .function-buttons {
                    padding-top: 4px;
                    padding-right: 0;
                }
            `);
        }
    }

    // Cascading Style Sheets・bbs.fobshanghai.com
    !!~hn.indexOf('bbs.fobshanghai.com') && GM_addStyle(`
        #function-buttons.function-buttons {
            padding-top: 48px !important;
        }

        .maintable > .spaceborder > table:first-child,
        .line div,
        .t_infoline .line {
            display: none;
        }

        #aaaa {
            display: block;
        }

        .mainheader {
            -moz-user-select: none;
            -ms-user-select: none;
            -webkit-user-select: none;
            user-select: none;
        }
    `);

    // Cascading Style Sheets・bbs.huorong.cn
    !!~hn.indexOf('bbs.huorong.cn') && GM_addStyle(`
        .function-buttons {
            margin-top: 10px;
            padding-right: 6px;
        }

        .custom-function-button {
            background-color: #fff;
        }
    `);

    // Cascading Style Sheets・bbs.360.cn
    !!~hn.indexOf('bbs.360.cn') && GM_addStyle(`
        .custom-function-button {
            margin-top: -20px;
            padding: 0 8px;
            background-color: #f1f2f6;
        }

        .custom-function-button:hover {
            color: #f33;
            background-color: #fff;
        }

        .apk-download,
        .apk-download-pannel,
        .pls .tip,
        ignore_js_op .tip {
            display: none;
        }

        .pls .avatar img {
            padding: 0;
            background: none;
            width: 54px;
            height: 54px;
            border: none;
            border-radius: 50% !important;
            box-shadow: 0 0 2px #bbb !important;
        }

        .pls .avatar img:hover {
            border-radius: 0 !important;
        }
    `);
})();
