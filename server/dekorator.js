const { injectDecoratorServerSide } = require('@navikt/nav-dekoratoren-moduler/ssr');

const getHtmlWithDecorator = (filePath) =>
    injectDecoratorServerSide({
        env: process.env.ENV,
        filePath: filePath,
        enforceLogin: false,
        level: 'Level4',
        redirectToApp: true,
        utloggingsvarsel: true,
        breadcrumbs: [{ url: `https://person.dev.nav.no/min-side`, title: 'Min Side' }],
    });

module.exports = getHtmlWithDecorator;
