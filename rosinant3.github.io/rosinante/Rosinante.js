
import React, { Component } from 'react';

const nativeMax = Math.max;
const nativeMin = Math.min;

class Vision extends Component {

	constructor(props) {

		super(props);

		this.topLine = React.createRef();
		this.bottomLine = React.createRef();

	}

	render() {

	let position = "sticky";
	let topTriggerPoint = `${this.props.top}%`;
	let bottomTriggerPoint = `${this.props.bottom}%`;
	let opacity;
	let zIndex = this.props.zIndex || 999999999999;

	if (this.props.container instanceof Window) {

		position = "fixed";

	}
	
	if (this.props.vision === true) {

		opacity = 1;

	}

	if (this.props.vision === false) {

		opacity = 0;
		zIndex = -999999999999;

	}		
	
	if (this.props.bottom > 50) {

		bottomTriggerPoint = `50%`;

	}

	if (this.props.bottom < 0) {

		bottomTriggerPoint = `0%`;

	}

	if (this.props.top > 100) {

		topTriggerPoint = `100%`;

	}

	if (this.props.top < 50) {

		topTriggerPoint = `50%`;

	}

        return <React.Fragment><div ref={this.topLine} style = {{

			position: position,
			bottom: topTriggerPoint,
			left: "0px",
			right: "0px",
			height: "1px",
			opacity: opacity,
			backgroundColor: "red",
			id: "rosinanteTopElement",
			pointerEvents: "none",
			zIndex: zIndex		

		}} ></div><div ref={this.bottomLine} style = {{

			position: position,
			bottom: bottomTriggerPoint,
			left: "0px",
			right: "0px",
			height: "1px",
			opacity: opacity,
			backgroundColor: "red",
			id: "rosinanteBottomElement",
			pointerEvents: "none",
			zIndex: zIndex
					

		}} ></div></React.Fragment>;

	}

}

class Rosinante {

    constructor(scrollContainer, topLine, bottomLine, scrollItem, scrollTarget, once, visible, notVisible, throttleValue, responsiveBreakPoint, elementPieceTopSmall, elementPieceBottomSmall, elementPieceTopLarge, elementPieceBottomLarge) {

	this.Rosinante = {

		scrollContainer: scrollContainer,
		scrollItem: scrollItem,
		scrollTarget: scrollTarget,
		topLine: topLine,
		bottomLine: bottomLine,
		once: once,
		visible: visible,
		notVisible: notVisible,
		throttle: throttleValue,
		responsiveBreakPoint: responsiveBreakPoint,
		elementPieceTopSmall: elementPieceTopSmall,
		elementPieceBottomSmall: elementPieceBottomSmall,
		elementPieceTopLarge: elementPieceTopLarge,
		elementPieceBottomLarge: elementPieceBottomLarge

	};

        this.anchors = {  };

        // THROTTLE 

            this.debounce = this.debounce.bind(this);
            this.throttle = this.throttle.bind(this);

        // THROTTLE

        this.callRosinante = this.callRosinante.bind(this);
	this.removeRosinante = this.removeRosinante.bind(this);

        this.isVisible = this.isVisible.bind(this);
        this.onVisibilityChange = this.onVisibilityChange.bind(this);
        this.throttle = this.throttle.bind(this);
        this.debounce = this.debounce.bind(this);
	
	this.rosinanteHeart = this.rosinanteHeart.bind(this);

	this.throttledHeart = this.throttle(this.rosinanteHeart, throttleValue);



    }

    callRosinante() {

	this.Rosinante.scrollContainer.addEventListener("scroll", this.throttledHeart);
	
	setTimeout(() => {
        
		this.rosinanteHeart();

    	}, 1);

	

  
    }

    removeRosinante() {

	this.Rosinante.scrollContainer.removeEventListener("scroll", this.throttledHeart);
	

    }

    rosinanteHeart() {

		this.onVisibilityChange( this.Rosinante.scrollTarget, () => {

			if (this.Rosinante.once === true) {

				this.Rosinante.scrollContainer.removeEventListener("scroll", this.throttledHeart);

			}

			this.Rosinante.visible();
	

		},  () => {

			this.Rosinante.notVisible();

		});
		
    }

    isVisible(el) {

            let ele = el.getBoundingClientRect();

	    let bottomAnchor;
	    let topAnchor;

	    if (this.Rosinante.topLine && this.Rosinante.bottomLine) {

            	bottomAnchor = this.Rosinante.topLine.getBoundingClientRect().y;
            	topAnchor = this.Rosinante.bottomLine.getBoundingClientRect().y;

	    }

            if ((window.innerWidth || document.documentElement.clientWidth) 
            <= this.Rosinante.responsiveBreakPoint) {

            	let eleHTS = ele.y + this.Rosinante.elementPieceTopSmall;
	    	let eleHBS = ele.y + this.Rosinante.elementPieceBottomSmall;

		if (bottomAnchor > eleHTS) {

			return false;

		}

		else if (topAnchor < eleHBS) {

			return false;

		}

		else {

			return true;

		}

            }

            if ((window.innerWidth || document.documentElement.clientWidth) > this.Rosinante.responsiveBreakPoint) {
       
            	let eleHTL = ele.y + this.Rosinante.elementPieceTopLarge;
		let eleHBL = ele.y + this.Rosinante.elementPieceBottomLarge;

		if (bottomAnchor > eleHTL) {

			return false;

		}

		else if (topAnchor < eleHBL) {

			return false;

		}

		else {

			return true;

		}

            	
            }
          
                
    }

    onVisibilityChange(el, callback, callback2) {

            let visible = this.isVisible(el);

            if (visible === true) {
         
                if (typeof callback == 'function') {

                    callback();

                }

            }

            if (visible === false) {

                if (typeof callback == 'function') {

                    callback2();

                }

            }

    }

	debounce(func, wait, options) {
        let lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = false,
          maxing = false,
          trailing = true,
          FUNC_ERROR_TEXT = "NOT A FUNCTION";
        if (typeof func !== 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        wait = Number(wait) || 0;
        if (typeof options === 'object') {
          leading = !!options.leading;
          maxing = 'maxWait' in options;
          maxWait = maxing
            ? nativeMax(Number(options.maxWait) || 0, wait)
            : maxWait;
          trailing = 'trailing' in options
            ? !!options.trailing
            : trailing;
        }
      
        function invokeFunc(time) {
          let args = lastArgs,
            thisArg = lastThis;
      
          lastArgs = lastThis = undefined;
          lastInvokeTime = time;
          result = func.apply(thisArg, args);
          return result;
        }
      
        function leadingEdge(time) {
          // Reset any `maxWait` timer.
          lastInvokeTime = time;
          // Start the timer for the trailing edge.
          timerId = setTimeout(timerExpired, wait);
          // Invoke the leading edge.
          return leading
            ? invokeFunc(time)
            : result;
        }
      
        function remainingWait(time) {
          let timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            result = wait - timeSinceLastCall;
          
          return maxing
            ? nativeMin(result, maxWait - timeSinceLastInvoke)
            : result;
        }
      
        function shouldInvoke(time) {
          let timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime;
          // Either this is the first call, activity has stopped and we're at the trailing
          // edge, the system time has gone backwards and we're treating it as the
          // trailing edge, or we've hit the `maxWait` limit.
          return (lastCallTime === undefined || (timeSinceLastCall >= wait) || (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
        }
      
        function timerExpired() {
          const time = Date.now();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          // Restart the timer.
          timerId = setTimeout(timerExpired, remainingWait(time));
        }
      
        function trailingEdge(time) {
          timerId = undefined;
      
          // Only invoke if we have `lastArgs` which means `func` has been debounced at
          // least once.
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = undefined;
          return result;
        }
      
        function cancel() {
          if (timerId !== undefined) {
            clearTimeout(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = undefined;
        }
      
        function flush() {
          return timerId === undefined
            ? result
            : trailingEdge(Date.now());
        }
      
        function debounced() {
          let time = Date.now(),
            isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
      
          if (isInvoking) {
            if (timerId === undefined) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              // Handle invocations in a tight loop.
              timerId = setTimeout(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === undefined) {
            timerId = setTimeout(timerExpired, wait);
          }
          return result;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }
      
  throttle(func, wait, options) {


        let leading = true,
          trailing = true,
          FUNC_ERROR_TEXT = "NOT A FUNCTION";
      
        if (typeof func !== 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        if (typeof options === 'object') {
          leading = 'leading' in options
            ? !!options.leading
            : leading;
          trailing = 'trailing' in options
            ? !!options.trailing
            : trailing;
        }
        return this.debounce(func, wait, {
          leading,
          maxWait: wait,
          trailing,
        });
      }

}

export { Rosinante, Vision };