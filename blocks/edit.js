import ServerSideRender from "@wordpress/server-side-render";

import {
  InspectorControls,
  useBlockProps,
} from '@wordpress/block-editor';

import {
  useEffect,
} from '@wordpress/element';

import metadata from './block.json';

import './editor.scss';

const { name } = metadata;

import 'flexslider'

const { Flexslider } = jQuery;

export default ( { clientId } ) => {
  const slideit = () => {
    const instanceId = 'block-' + clientId;
    const $ = jQuery;

    const slider = $( "#" + instanceId + " .slider" )
    if ( slider && slider.length && !slider.data("flexslider") ) {
      slider.flexslider( {} );
    }
  };

  useEffect( () => {
    slideit()
  } )

  return (
    <div { ...useBlockProps() }>
      {
        <InspectorControls>
        </InspectorControls>
      }

      <div>
        <ServerSideRender
          block={ name }
        />
      </div>

    </div>
  );

}
