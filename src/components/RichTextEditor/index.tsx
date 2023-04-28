/* eslint-disable import/first */
/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
// TinyMCE so the global var exists
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import tinymce from 'tinymce/tinymce';

/**
 * This is required to register tinymce as a window global
 * 
 * It internally uses this for all of it's plugin modules.
 */
Object.defineProperty(window, 'tinymce', {
  value: tinymce,
  writable: true,
})


// DOM model
import 'tinymce/models/dom/model'
// Theme
// Toolbar icons
import 'tinymce/icons/default';
// Editor styles

// importing the plugin js.
// if you use a plugin that is not listed here the editor will fail to load
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/autoresize';
import 'tinymce/plugins/autosave';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/code';
import 'tinymce/plugins/codesample';
import 'tinymce/plugins/directionality';
import 'tinymce/plugins/emoticons';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/help';
import 'tinymce/plugins/image';
import 'tinymce/plugins/importcss';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/media';
import 'tinymce/plugins/nonbreaking';
import 'tinymce/plugins/pagebreak';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/quickbars';
import 'tinymce/plugins/save';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/table';
import 'tinymce/plugins/template';
import 'tinymce/plugins/visualblocks';
import 'tinymce/plugins/visualchars';
import 'tinymce/plugins/wordcount';

// importing plugin resources
import 'tinymce/plugins/emoticons/js/emojis';
import 'tinymce/skins/ui/oxide/skin.min.css';
import 'tinymce/themes/silver';

import { Editor, IAllProps } from '@tinymce/tinymce-react';

// Content styles, including inline UI like fake cursors
/* eslint import/no-webpack-loader-syntax: off */
import contentUiSkinCss from 'tinymce/skins/ui/oxide/content.css';
import contentCss from 'tinymce/skins/content/default/content.css';

import { styled } from '@mui/material';
import { ComponentProps } from 'react';

type BaseRichTextEditorProps = IAllProps;

/**
 * This is the bundled version of the rich text editor.  It has by default all of the open source plugins loaded, so it will be a relatively hefty
 * addition to any bundle (that's just TinyMCE).  
 * 
 * note: It was my intention to make a non bundled version where you have to specify the script source and allow consumers of this component
 * to specify a location to load the rest of the assets.
 * 
 * @param props 
 * @returns 
 */
function BaseRichTextEditor(props: BaseRichTextEditorProps): JSX.Element {
  const {init, ...rest} = props;

  // Somewhat of a hacky way to grab the global styles and pass them into tinymce.  This really
  // is only useful for global font sizes.
  const globalStyles = [...document.querySelectorAll('style[data-emotion="css-global"]')];
  const styles = globalStyles.reduce((accumulation, next) => {
    return `${accumulation + next.innerHTML  }\n`;
  }, '');

  // note that skin and content_css is disabled to avoid the normal
  // loading process and is instead loaded as a string via content_style
  return (
    <Editor
      init={{
        branding: false,
        content_css: false,
        content_style: [
          contentCss, 
          contentUiSkinCss, 
          styles,
          init?.content_style || ''
        ].join('\n'),
        menubar: false,
        promotion: false,
        skin: false,
        ...init,
      }}
      {...rest}
    />
  );
}

export const RichTextEditor = styled(BaseRichTextEditor)(({theme}) => ({fontFamily: theme.typography.fontFamily}));
export type RichTextEditorProps = ComponentProps<typeof RichTextEditor>;

export default RichTextEditor;