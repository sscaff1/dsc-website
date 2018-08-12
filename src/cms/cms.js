import CMS from 'netlify-cms';
import '../components/all.scss';

import BlogPostPreview from './preview-templates/BlogPostPreview';
import HomePagePreview from './preview-templates/HomePagePreview';

CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('home', HomePagePreview);
