function addTrackLink(){if("undefined"!=typeof analytics&&void 0!==analytics.trackLink){var t=document.getElementById("github-try-out-image"),i=document.getElementById("github-try-out-button");void 0!==t&&analytics.trackLink(t,"Clicked Gitpod Try Out Repository",{}),void 0!==i&&analytics.trackLink(i,"Clicked Gitpod Try Out Repository",{});const e=document.querySelectorAll(".askui-installer-download-link-windows");if(void 0!==e&&e.length>0)for(let t=0;t<e.length;t++)analytics.trackLink(e[t],"Download Windows Installer Pressed",{originsource:"dev-docs"})}else setTimeout(addTrackLink,1e3)}addTrackLink();