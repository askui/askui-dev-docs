function addTrackLink() {
    if (typeof analytics !== 'undefined' && typeof analytics.trackLink !== 'undefined') {
        // Gitpod Try-Out tracking
        var cardPicture = document.getElementById('github-try-out-image');
        var cardButton = document.getElementById('github-try-out-button');
        if (typeof cardPicture !== 'undefined') {
            analytics.trackLink(cardPicture, 'Clicked Gitpod Try Out Repository', {});
        }
        if (typeof cardButton !== 'undefined') {
            analytics.trackLink(cardButton, 'Clicked Gitpod Try Out Repository', {});
        }
        // AskUI-Installer download tracking
        const askuiInstallerDownloadLinks = document.querySelectorAll('.askui-installer-download-link-windows');
        if (typeof askuiInstallerDownloadLinks !== 'undefined' && askuiInstallerDownloadLinks.length > 0) {
            for (let i=0; i < askuiInstallerDownloadLinks.length; i++) {
                analytics.trackLink(
                    askuiInstallerDownloadLinks[i],
                    'Download Windows Installer Pressed', {
                        originsource: 'dev-docs'
                    });
            }
        }
    } else {
        setTimeout(addTrackLink, 1000);
    }
}
addTrackLink();
