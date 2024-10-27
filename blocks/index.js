import { registerBlockType } from '@wordpress/blocks'; // Import registerBlockType() from wp.blocks

/**
 * Internal dependencies
 */
import edit from './edit.js';
import icon from './icon.js';

import metadata from './block.json';

import './style.scss';

const { name } = metadata;

export { metadata, name };

export const settings = {
  title: 'Slider',
  description: 'Slider',
  keywords: [],
  icon,
  edit,
  save: () => {
    return null
  }
};

registerBlockType( name, { ...metadata, ...settings } );
