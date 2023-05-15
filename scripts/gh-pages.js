var ghpages = require('gh-pages');

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        silent: true,
        repo: 'https://' + process.env.GITHUB_TOKEN + '@github.com/starpelly/starpelly.github.io.git',
        user: {
            name: 'Starpelly',
            email: 'braedonwilcox@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)