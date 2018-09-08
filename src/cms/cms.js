import CMS from 'netlify-cms';
import '../components/all.scss';

import VisionPreview from './preview-templates/VisionPreview';
import ServicePreview from './preview-templates/ServicePreview';
import MemberPreview from './preview-templates/MemberPreview';
import ProjectPreview from './preview-templates/ProjectPreview';

CMS.registerPreviewTemplate('home', VisionPreview);
CMS.registerPreviewTemplate('services', ServicePreview);
CMS.registerPreviewTemplate('member', MemberPreview);
CMS.registerPreviewTemplate('projects', ProjectPreview);
