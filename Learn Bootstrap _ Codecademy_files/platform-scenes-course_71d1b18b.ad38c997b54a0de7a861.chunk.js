(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[402],{PyEA:function(e,t,r){"use strict";r.r(t);var n=r("wx14"),o=r("rePB"),s=r("ODXe"),c=r("q1tI"),i=r.n(c),a=r("/MKj"),u=r("GR0a"),p=r("/BuZ"),l=r("e18T"),b=r("cHig"),O=r("yy36"),h=r("Ff2n"),C=r("cQ3R"),j=r("b0K7"),m=r("1xSP"),y=r("lzsc"),d=r("c8W1"),f=r("2oex"),w=r("CWAm"),P=r("givd"),g=r("J2dO");const I=["currentContentItem","hasCourseAccess","hasCourseContentItemAccess","platformPage","contentTitle"];function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const E={showModal:P.c,nextContentItemRequested:d.b,trackVisit:w.i},CourseRouteComponent=e=>{const t=m.c[e.currentContentItem.type].component;return i.a.createElement(t,e)};class courseContentItem_CourseContentItem extends c.Component{constructor(...e){super(...e),Object(o.a)(this,"componentDidUpdate",(e=>{e.hasCourseContentItemAccess&&!this.props.hasCourseContentItemAccess&&this.showProExclusiveCourseInterstitial()})),Object(o.a)(this,"redirectToContainerCourse",(()=>{const e=this.props.locationQuery.course_redirect;return!!e&&(window.location.assign(Object(j.eb)(e)),!0)})),Object(o.a)(this,"showNextContentInterstitial",(()=>{const e=this.props,t=e.hasNextContent,r=e.isCourseCompleted;if(t||r)this.props.nextContentItemRequested({returnPath:this.returnPath()});else{if(this.redirectToContainerCourse())return;window.location.assign(this.returnPath())}})),Object(o.a)(this,"showProExclusiveCourseInterstitial",(()=>{this.props.showModal({type:"ProExclusiveCourseInterstitial",returnPath:this.returnPath()})}))}componentDidMount(){this.props.hasCourseContentItemAccess||this.showProExclusiveCourseInterstitial()}returnPath(){const e=this.props.locationParams;return Object(j.eb)(e.trackSlug)}renderCourseRouteComponent(){const e=this.props,t=e.currentContentItem,r=(e.hasCourseAccess,e.hasCourseContentItemAccess),o=e.platformPage,s=(e.contentTitle,_objectSpread(_objectSpread({},Object(h.a)(e,I)),{},{exitPaths:{logo:"/",back:this.returnPath()},navigateToExercise:this.props.navigateToExercise,redirectToContainerCourse:this.redirectToContainerCourse,showNextContentInterstitial:this.showNextContentInterstitial}));return r?i.a.createElement(CourseRouteComponent,Object(n.a)({next:()=>{}},s,{platformPage:o,currentContentItem:t})):"lesson"===t.type?i.a.createElement(g.a,{contentItemSlug:t.slug,isFreeTrack:!1,hideSignUp:!0}):i.a.createElement(p.a,null)}render(){const e=this.props.contentTitle;return i.a.createElement(i.a.Fragment,null,i.a.createElement(C.a,{title:e}),this.renderCourseRouteComponent())}}var _=Object(a.connect)((e=>({currentCourse:Object(f.F)(e),contentTitle:Object(f.i)(e),currentContentItem:Object(f.q)(e),nextContentItems:Object(f.R)(e),hasNextContent:Object(f.Q)(e),isCourseCompleted:Object(y.a)(e),hasCourseAccess:Object(f.L)(e),hasCourseContentItemAccess:Object(f.M)(e)})),E)(courseContentItem_CourseContentItem);function course_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function course_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?course_ownKeys(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):course_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const x={fetchInitialCourseContent:b.b};t.default=Object(a.connect)((e=>({isAnonymous:Object(O.t)(e)})),x)((e=>{const t=Object(c.useState)(!0),r=Object(s.a)(t,2),o=r[0],a=r[1],b=e.locationParams,O=e.locationQuery,h=e.dispatch,C=e.fetchInitialCourseContent,j=e.isAnonymous;if(Object(c.useEffect)((()=>{if(j)return;a(!0),(async()=>{await C(),a(!1)})()}),[j,b.trackSlug,C]),j||o)return i.a.createElement(p.a,null);return i.a.createElement(_,Object(n.a)({navigateToExercise:(e,t=!1)=>{let r=l.d(course_objectSpread(course_objectSpread({},b),{},{sectionType:"exercises",exerciseSlug:e,query:O}));t&&(r=Object(u.redirect)(r)),h(r)}},e))}))}}]);
//# sourceMappingURL=platform-scenes-course~71d1b18b.ad38c997b54a0de7a861.chunk.js.map