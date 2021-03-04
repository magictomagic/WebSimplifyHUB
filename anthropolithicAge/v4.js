// ==UserScript==
// @name         minimalism
// @version      0.0.4
// @description  去除 inoreader 广告，去除其弹出的遮罩警示 “检测到 adblock”，去除 && 简化 常用技术社区花里胡哨的东西，配合 adblock 插件
// @author       magictomagic
// @namespace    http://tampermonkey.net/
// @create       2020-12-12
// @lastmodified 2021-01-02
// @match        https://*/*
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @note         0.0.3 增加部分网站
// ==/UserScript==

/** 欢迎 inoreader 的用户，或其它追求 minimalism 的同学，加我 QQ 1172765646 来骂我的脚本那里出问题了 */

var toArray = (pseudo) => [].slice.call(pseudo);

const loop = (times, timeout, callback) => {
    var timer = setInterval(() => {
        times--;
        if (times === 0) {
            clearInterval(timer);
        }
        callback();
    }, timeout);
}

const removeTag = elesList => {
    elesList.forEach(eles => eles && (typeof eles.length === 'undefined' ? eles.remove() : eles.forEach(ele => ele.remove())));
}

const segmentfault = () => {
    loop(20, 100, () => {
        removeTag([
            document.getElementById("sf-header"),
            document.getElementsByClassName('col-12')[1],
            document.getElementsByClassName("functional-area-left")[0]
        ]);
        let firstAd = document.getElementById('first-ad');
        firstAd && (firstAd.parentElement ? firstAd.parentElement : firstAd).remove();
    })
}

const w3cschool = () => {
    loop(50, 100, () => {
        removeTag([
            document.getElementsByClassName('widget-main')[0],
            document.getElementById('topbanner'),
            document.getElementById('rfbanner'),
            document.getElementById('toolbar')
        ]);
    })
}

const tutorialspoint = () => {
    loop(50, 100, () => {
        document.querySelectorAll('[id^=ad-container]').forEach(ele => {
            (ele.parentNode ? (ele.parentNode.parentNode ? ele.parentNode.parentNode : ele.parentNode) : ele).remove()
        })
    })
}

const zhihu = () => {
    loop(50, 100, () => {
        removeTag([
            toArray(document.getElementsByClassName("Sticky")),
            document.getElementsByClassName('AdblockBanner')[0]
        ]);
    })
}

const geeksforgeeks = () => {
    loop(20, 500, () => {
        removeTag([
            document.getElementsByClassName("header-main__wrapper")[0],
            document.getElementsByClassName("cc-banner")[0],
            toArray(document.getElementsByClassName('widget')),
            toArray(document.getElementsByClassName('i-amphtml-inabox')),
            toArray(document.getElementsByClassName('_adr_abp_container'))
        ]);
    })
}

const inoreader = () => {
    setInterval(function() {
        removeTag([
            document.getElementById("deduplicator_hint_dialog_wrapper"),
            toArray(document.getElementsByClassName('ad_title')),
            toArray(document.getElementsByClassName('ad_footer_remove')),
            toArray(document.getElementsByClassName('block_article_ad')),
            document.getElementById("no_article_selected")
        ]);

        [].slice.call(document.getElementsByTagName("html")[0].lastElementChild.querySelectorAll(".inno_dialog_scroll_overlay, .inno_dialog_modal_overlay")).filter(ele => {
            let headIdLen = ele.id.split('_')[0].length;
            return ele.id.split('_').length == 3 && headIdLen >= 14 && headIdLen <= 18
        }).forEach(ele => ele.remove());
    }, 200)
};


const juejin = () => {
    setInterval(() => {
        removeTag([
            document.getElementsByClassName('action-bar')[0],
            document.getElementsByClassName("main-header-box")[0],
            document.getElementsByClassName("sidebar")[0],
            document.getElementsByClassName("article-suspended-panel")[0],
            document.getElementsByClassName("box")[0],
            document.getElementsByClassName("suspension-panel")[0],
            document.getElementsByClassName("extension")[0]
        ]);
        let mainArea = document.getElementsByClassName("main-area")[0];
        mainArea && mainArea.classList.remove("main-area");
    }, 200)
}

const csdn = () => {
    $(document).ready(function() {
        removeTag([
            document.getElementsByClassName("csdn-side-toolbar")[0],
            document.getElementById("csdn-toolbar"),
            document.getElementById("toolBarBox"),
            document.getElementsByClassName("leftPop")[0],
            document.getElementById("blogColumnPayAdvert"),
            /** strict */
            toArray(document.getElementsByClassName("aside-box"))
            //document.getElementsByClassName("article-info-box")[0]
        ]);
    })
}

const w3schools = () => {
    loop(20, 200, () => {
        removeTag([
            document.getElementById('right')
        ])
    })
}

const mail_163 = () => {
    loop(20, 200, () => {
        removeTag([
            document.getElementsByClassName("gWel-bottom")[0],
            document.getElementById("theme"),
            document.getElementsByClassName("mailApp")[0],
            document.getElementsByClassName("m-footer")[0],
            document.querySelector("a[data-tj-name=b_nav_vipmail_click]"),
            document.querySelector("a[data-tj-name=b_nav_mailplus_click]"),
            document.getElementById("adtag")
        ]);
        document.getElementById("mainCnt").style = "";
    })
}

const jianshu = () => {
    loop(20, 200, () => {
        removeTag([document.getElementsByTagName("header")[0],
            document.getElementsByTagName("footer")[0].nextElementSibling,
            document.getElementsByTagName("aside")[0],
            document.getElementsByClassName("_2xr8G8")[0]
        ])
    })
}

const imooc = () => {
    loop(20, 200, () => {
        removeTag([
            document.getElementById("new_header"),
            document.getElementById("sub-header"),
            document.getElementById("J_GotoTop"),
            document.getElementsByClassName('active-box')[0],
            document.getElementsByClassName('right_recommend')[0]
        ]);
        $('.detail-content').removeClass("long-content");
        document.querySelector("[class^=left_essay]").setAttribute("style", "width: auto !important");
    })
}

const bilibili = () => {
    loop(20, 200, () => {
        removeTag([
            document.getElementById("internationalHeader")
        ])
    })
}

// document.getElementById('container').remove()

const leetcode = () => {
    loop(20, 200, () => {
        removeTag([
            document.getElementsByClassName("ergbin814 css-yt0vqz-BaseButtonComponent-AppButton ery7n2v0")[0]
        ]);
        // 可能和时间有关
        // document.getElementsByClassName("css-f80zs2-layer1-NavWrapper ergbin84")[0]
    })
}

const expressjs = () => {
    loop(20, 200, () => {
        removeTag([
            document.getElementsByTagName("header")[0]
        ])
    })
}

const tencentcloud = () => {
    loop(20, 200, () => {
        removeTag([
            document.getElementsByClassName('com-sticky-header col-2-sticky-header')[0],
            document.getElementsByClassName('J-headerBottom c-nav-bottom responsive')[0],
            document.getElementsByClassName('com-widget-operations2 theme2 J-sharingBar')[0],
            document.getElementsByClassName("layout-side")[0],
            document.getElementsByClassName('com-widget-global')[0]
        ])
    })
}

const oschina = () => {
    loop(20, 200, () => {
        removeTag([
            document.getElementsByClassName('small-header-box small-header-box--fixed small-header-box--default-simple')[0],
            document.getElementsByClassName('detail-toolbar-box__inner')[0],
            document.getElementsByClassName('sidebar-box')[0],
            document.getElementsByClassName('codeBlock')[0]
        ])

    })
}

const sspai = () => {
    loop(20, 200, () => {
        removeTag([
            document.getElementsByTagName('header')[0],
            document.getElementsByClassName('article-side sideTop')[0],
            document.getElementsByClassName('greyBgBox')[0],
            document.getElementsByClassName('article-side')[0]
        ])
        document.getElementsByClassName("simple")[0].style.backgroundColor = "rgba(200,200,200,100)"
    })
}

const w3cplus = () => {
    loop(20, 200, () => {
        removeTag([
            document.getElementsByClassName("col-extra")[0]
        ])
    })
}

const spring4all = () => {
    loop(20, 200, () => {
        removeTag([
            document.getElementsByClassName("col-sm-3")[0]
        ])
    })
}

const biancheng = () => {
    loop(20, 200, () => {
        removeTag([
            document.getElementById("ad-arc-top"),
            document.getElementById('topbar')
        ])
    })
}

const thinbug = () => {
    loop(20, 200, () => {
        removeTag([
            document.getElementsByClassName("right")[0]
        ])
    })
}

const medium = () => {
    loop(2000, 200, () => {
        removeTag([
            // document.getElementById('container'), // why dosen't work?
            document.getElementsByClassName("s c")[0],
            document.getElementsByClassName('cv cw cx cy aj cz da s')[0]
        ])
    })
}

const youdao = () => {
    // loop(20, 2000, () => {
    //     removeTag([
    //         document.getElementsByClassName('fanyi-ad')[0]
    //     ])
    // })
}


// const shimo = () => {
//     $(document).ready(function() {
//         removeTag([
//             // document.getElementsByClassName("gmELis")[0].remove()
//             // console.log("dasd")
//             document.getElementsByClassName("gmELis")[0]
//         ]);
//     })
// }

const shimo = () => {
    loop(20, 200, () => {
        removeTag([
            // document.getElementsByClassName("gmELis")[0].remove()
            // console.log("dasd")
            document.getElementsByClassName("gmELis")[0]
        ]);
    })
}



(function() {
    'use strict';
    var urlHost = window.location.host;
    var urlSet = {
        ".*zhihu.com": zhihu, // https://www.zhihu.com/question/293069047   https://zhuanlan.zhihu.com/p/34139993
        'segmentfault.com': segmentfault, // https://segmentfault.com/a/1190000006150186
        'www.w3cschool.cn': w3cschool, // https://www.w3cschool.cn/electronmanual/9xri1qlc.html
        'www.tutorialspoint.com': tutorialspoint, // https://www.tutorialspoint.com/electron/how_electron_works.htm
        'www.geeksforgeeks.org': geeksforgeeks, // https://www.geeksforgeeks.org/python-lambda/?ref=lbp
        'www.inoreader.com': inoreader, // https://www.inoreader.com/folder/tools
        'juejin.cn': juejin, // https://juejin.cn/post/6844903742966349832
        'blog.csdn.net': csdn, // https://blog.csdn.net/JimmyLuo17/article/details/57439407
        'www.w3schools.com': w3schools, // https://www.w3schools.com/js/js_json_syntax.asp
        'mail.163.com': mail_163, // https://mail.163.com/js6/main.jsp?sid=UBFEqHmlDAClPJlpuillpYadyqZgTCSi&df=mail163_letter#module=welcome.WelcomeModule%7C%7B%7D
        'www.jianshu.com': jianshu, // https://www.jianshu.com/p/1ebc3a924d65
        'www.imooc.com': imooc, // https://www.imooc.com/article/312773
        'www.bilibili.com': bilibili, // https://www.bilibili.com/video/BV1Ns411N7HU?p=80
        'leetcode-cn.com': leetcode, // https://leetcode-cn.com/problems/merge-in-between-linked-lists/
        'expressjs.com': expressjs,
        'cloud.tencent.com': tencentcloud, // https://cloud.tencent.com/developer/article/1629357
        'my.oschina.net': oschina, // https://my.oschina.net/u/588516/blog/2208550
        'sspai.com': sspai, // https://sspai.com/post/52521
        'www.w3cplus.com': w3cplus, // https://www.w3cplus.com/css/centering-css-complete-guide.html
        'www.spring4all.com': spring4all, // http://www.spring4all.com/
        'c.biancheng.net': biancheng, // http://c.biancheng.net/view/1216.html
        'www.thinbug.com': thinbug, // https://www.thinbug.com/q/46976665
        'fanyi.youdao.com': youdao, // http://fanyi.youdao.com/
        'medium.com': medium, //https://medium.com/javascript-in-plain-english/npm-vs-yarn-choosing-the-right-package-manager-a5f04256a93f
        'shimo.im': shimo, // https://shimo.im/docs/whkrJWcykkTwYDKW/read
    };
    for (let key in urlSet) {
        if (urlHost.match(RegExp(key))) {
            urlSet[key]();
        }
    }

    // by firefoxmmx
    // var script = document.createElement("script");
    // script.type = "text/javascript";
    // script.src = "jquery.js";
    // document.getElementsByTagName('head')[0].appendChild(script);
    // setTimeout(function() {
    //     $(document).ready(function() {

    //         alert('Hello World');
    //     });
    // }, 100);



    // var script = document.createElement("script");
    // script.src = "https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js";
    // document.getElementsByTagName('head')[0].appendChild(script);

})();





//class="modal-content"