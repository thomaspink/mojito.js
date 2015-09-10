const ENV = {};

// HTML data attributes
ENV.HTMLDATA_SHORTHAND = false;
ENV.HTMLDATA_NAMESPACE = 'mojito';
ENV.HTMLDATA_CONTROLLER_DEF = ENV.HTMLDATA_NAMESPACE+'-controller';
ENV.HTMLDATA_CONTROLLER_DEF_SHORTHAND = 'controller';
ENV.HTMLDATA_CONTROLLER_ID = ENV.HTMLDATA_CONTROLLER_DEF+'-id';
ENV.HTMLDATA_CONTROLLER_ID_SHORTHAND = ENV.HTMLDATA_CONTROLLER_DEF_SHORTHAND+'-id';
ENV.HTMLDATA_CONTROLLER_REF = ENV.HTMLDATA_CONTROLLER_DEF+'-ref';
ENV.HTMLDATA_CONTROLLER_REF_SHORTHAND = ENV.HTMLDATA_CONTROLLER_DEF_SHORTHAND+'-ref';
ENV.HTMLDATA_ACTION = ENV.HTMLDATA_NAMESPACE+'-action';
ENV.HTMLDATA_ACTION_SHORTHAND = 'action';
ENV.HTMLDATA_ACTION_ID = ENV.HTMLDATA_ACTION+'-id';
ENV.HTMLDATA_ACTION_ID_SHORTHAND = ENV.HTMLDATA_ACTION_SHORTHAND+'-id';
ENV.HTMLDATA_EVENT = ENV.HTMLDATA_NAMESPACE+'-event';
ENV.HTMLDATA_EVENT_SHORTHAND = 'event';
ENV.HTMLDATA_PARAMS = ENV.HTMLDATA_NAMESPACE+'-params';
ENV.HTMLDATA_PARAMS_SHORTHAND = 'params';
ENV.HTMLDATA_CLASSBINDING = ENV.HTMLDATA_NAMESPACE+'-bind-class';
ENV.HTMLDATA_CLASSBINDING_SHORTHAND = 'bind-class';

// events
ENV.EVENTTYPES = "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu";
ENV.DEFAULT_EVENTTYPE = 'click';

export default ENV;