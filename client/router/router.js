import { _app }       from '/lib/__compatibility/__globals.js';
import { Meteor }     from 'meteor/meteor';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { FlowRouterMeta, FlowRouterTitle } from 'meteor/ostrio:flow-router-meta';

FlowRouter.globals.push({
  title: 'Meteor Files: Upload and Share'
});

FlowRouter.globals.push({
  meta: {
    keywords: {
      name: 'keywords',
      itemprop: 'keywords',
      content: 'file, files, upload, store, storage, share, share files, meteor, open source, javascript'
    },
    'og:url': {
      property: 'og:url',
      content() {
        return _app.currentUrl();
      }
    },
    'og:title': {
      property: 'og:title',
      content() {
        return document.title;
      }
    },
    description: {
      name: 'description',
      itemprop: 'description',
      property: 'og:description',
      content: 'Upload, Store and Share files with speed of Meteor'
    },
    'twitter:description': 'Upload, Store and Share files with speed of Meteor',
    'twitter:title'() {
      return document.title;
    },
    'twitter:url'() {
      return _app.currentUrl();
    },
    'og:image': {
      property: 'og:image',
      content: Meteor.absoluteUrl('icon_1200x630.png')
    },
    'twitter:image': {
      name: 'twitter:image',
      content: Meteor.absoluteUrl('icon_750x560.png')
    }
  }
});

FlowRouter.globals.push({
  link: {
    canonical: {
      rel: 'canonical',
      itemprop: 'url',
      href() {
        return _app.currentUrl();
      }
    },
    image: {
      itemprop: 'image',
      content() {
        return Meteor.absoluteUrl('icon_1200x630.png');
      },
      href() {
        return Meteor.absoluteUrl('icon_1200x630.png');
      }
    }
  }
});

FlowRouter.notFound = {
  action() {
    this.render('_layout', '_404');
  },
  title: '404: Page not found'
};

new FlowRouterTitle(FlowRouter);
new FlowRouterMeta(FlowRouter);
