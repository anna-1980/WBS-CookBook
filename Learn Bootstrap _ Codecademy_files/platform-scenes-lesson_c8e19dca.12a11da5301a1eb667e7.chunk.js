(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[630],{CCiN:function(e,t,n){"use strict";n.r(t),n.d(t,"LessonScene",(function(){return LessonScene}));var r=n("wx14"),s=n("Ff2n"),c=n("MKeS"),o=n("q1tI"),i=n.n(o),a=n("/MKj"),l=n("c7LY"),u=n("Tqhk"),x=n("c2gB"),d=n("J6xm"),m=n("XUH+"),b=n("Wdql"),h=n("M8cR"),v=n("2oex"),g=n("fxH1"),C=n("6lXR");const f=["currentCourse","disabled","currentContentItem","exitPaths","platformPage","hasNextContent","navigateToExercise","showNextContentInterstitial"],O=Object(c.a)({resolved:{},chunkName:()=>"platform-scenes-lesson-exercise",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:()=>Promise.all([n.e(150),n.e(264),n.e(120),n.e(91),n.e(360),n.e(206),n.e(391),n.e(3),n.e(119),n.e(164),n.e(589),n.e(277),n.e(96),n.e(130),n.e(356)]).then(n.bind(null,"4EYg")),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return n(t)},resolve(){return"4EYg"}}),E=Object(c.a)({resolved:{},chunkName:()=>"platform-scenes-lesson-legacy-exercise",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:()=>Promise.all([n.e(150),n.e(264),n.e(120),n.e(147),n.e(91),n.e(151),n.e(391),n.e(3),n.e(63),n.e(589),n.e(277),n.e(404),n.e(21),n.e(51),n.e(127)]).then(n.bind(null,"NuAQ")),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return n(t)},resolve(){return"NuAQ"}}),LessonScene=e=>{let t=e.currentCourse,n=e.disabled,c=e.currentContentItem,j=e.exitPaths,p=e.platformPage,I=e.hasNextContent,w=e.navigateToExercise,N=e.showNextContentInterstitial,y=Object(s.a)(e,f);const _=Object(a.useSelector)(v.s),k=Object(a.useSelector)(v.p),A=Object(a.useSelector)(b.i),S=Object(a.useSelector)(v.v),L=Object(a.useDispatch)(),P=Object(C.a)("le_next");if(Object(o.useEffect)((()=>{L(Object(h.a)())}),[_,L]),!_)return null;const D=_.components,q=_.ein_config,B=_.slug,T=_.workspace;if(!T)return null;const K=T.slug,M=Object(d.c)(Object.values(D));return i.a.createElement(u.a,null,P||k?i.a.createElement(x.a,{defaultFiles:M,readOnly:!1,currentTest:A,workspaceSlug:K,workspaceCheckpointSlug:B,initialSavepointSlug:`${B}-initial`,finalSavepointSlug:`${B}-final`,einConfig:q},i.a.createElement(m.a,{customFooter:i.a.createElement(l.a,{hasNextContent:I,currentCourse:t,currentContentItem:c,exercises:S,navigate:w,noLock:g.a.state.nolock,showNextContentInterstitial:N})},i.a.createElement(O,Object(r.a)({},y,{disabled:n,currentContentItem:c,currentExercise:_})))):i.a.createElement(E,Object(r.a)({},y,{showNextContentInterstitial:N,hasNextContent:I,currentLesson:c,currentCourse:t,currentExercise:_,platformPage:p,navigateToExercise:w,disabled:Boolean(n),exitPaths:j})))};t.default=LessonScene},c7LY:function(e,t,n){"use strict";var r=n("yrBZ"),s=n("q1tI"),c=n.n(s),o=n("/MKj"),i=n("y6wV"),a=n("ROfi"),l=n("wE9P"),u=n("2oex");const x={userClick:n("CWAm").f};t.a=Object(o.connect)((e=>({contentItemProgresses:Object(l.b)(e),currentExerciseIndex:Object(u.u)(e),canAccessNextExercise:Object(u.c)(e)})),x)((({canAccessNextExercise:e,currentContentItem:t,currentCourse:n,currentExerciseIndex:o,exercises:l=[],hasNextContent:u,navigate:x,next:d,noLock:m,showNextContentInterstitial:b,userClick:h})=>{const v=Object(s.useCallback)((({exerciseIndex:e})=>{if(e>=l.length){return!u&&n&&"welcome-to-codecademy"===n.slug?(window.location.assign("/welcome/find-a-course"),null):b?b():(d&&d(),null)}const t=l[e];x(t.slug)}),[n,l,u,x,d,b]);return c.a.createElement(a.a,{customProgressIndicator:c.a.createElement(r.b,{flex:1,alignItems:"center",justifyContent:"center"},`${o+1}/${l.length}`),customNavigation:c.a.createElement(i.a,{mayProceed:m||e,currentLesson:t,exerciseCount:l.length,currentExerciseIndex:o,navigate:v,userClick:h})})}))},y6wV:function(e,t,n){"use strict";n.d(t,"a",(function(){return LEExerciseNavigation}));var r=n("q1tI"),s=n.n(r),c=n("/MKj"),o=n("swBZ"),i=n("lkI2"),a=n("2oex"),l=n("/fvN");const LEExerciseNavigation=({currentExerciseIndex:e,exerciseCount:t,mayProceed:n,navigate:r,nextButtonText:u,userClick:x})=>{const d=Object(c.useSelector)(a.T),m=e+1===t,b=e<1&&!d;return s.a.createElement(l.a,{next:()=>{Object(i.a)("info",`Clicked exercise navigation next button (${n?"enabled":"disabled"})`),n?r({exerciseIndex:e+1}):x({data:{target:"disabled_next_exercise_button"}})},nextDisabled:!n,nextButtonText:u||(m?o.components.exercise_navigation.up_next:o.components.exercise_navigation.next),previous:()=>{e<1?Object(l.b)(d):(Object(i.a)("info","Clicked exercise navigation previous button"),r({exerciseIndex:e-1}))},previousDisabled:b,hotKeyDeps:[e]})}}}]);
//# sourceMappingURL=platform-scenes-lesson~c8e19dca.12a11da5301a1eb667e7.chunk.js.map