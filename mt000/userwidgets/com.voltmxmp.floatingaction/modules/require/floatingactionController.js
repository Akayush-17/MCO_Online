/*
#
#  Created by Team HCL.
#  Copyright (c) 2021 HCL Inc. All rights reserved.
#
*/
define(function() {
  var menustatus=false;
  var voltmxmp = voltmxmp || {};
  var voltmxLoggerModule = require("com/voltmxmp/floatingaction/voltmxLogger");
  voltmxmp.logger = (new voltmxLoggerModule("Floating Action Component")) || function() {};

  return {
    /**
		 * @constructor constructor
		 * @param basicConfig
		 * @param layoutConfig
		 * @param pspConfig
		 */

    constructor: function(baseConfig, layoutConfig, pspConfig) {
      //       var analytics=require("com/voltmxmp/"+"floatingaction"+"/analytics");
      //       analytics.notifyAnalytics();
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_ENTRY);
      this._flag = 0;
      this._menuItemType = "Only Image";
      this._animationType = "Default";
      this._enableOverlay = true;
      this.showMenuItems = this.showMenuItemsWithDefaultAnimation.bind(this);
      this.hideMenuItems = this.hideMenuItemsWithDefaultAnimation.bind(this);
      voltmx.application.setApplicationBehaviors({hideDefaultLoadingIndicator:true});
      centery = 50;
      this.view.onBreakpointChange=this.ChangePoint;
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_EXIT);

    },
    ChangePoint : function(){
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_ENTRY);
      this._flag = 0;
      this._menuItemType = "Only Image";
      this._animationType = "Default";
      this._enableOverlay = true;
      centery = 50;
      this.hideMenu();

    },
    /**
		 * @initGettersSetters Logic for getters/setters of custom properties
		 */

    initGettersSetters: function() {
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_ENTRY);
      defineSetter(this, "isVisibleMenuItem1", function(value) {
        try {
          voltmxmp.logger.trace("----------------------------- Setting isVisibleMenuItem1 Start", voltmxmp.logger.FUNCTION_ENTRY);
          if (typeof(value) === 'boolean') {
            this.view.flxOption1.isVisible=value;
            this.setUIForFloatingAction();
          } else {
            throw {
              error: "InvalidType",
              message: "Floating Action isVisibleMenuItem1 should be of type boolean"
            };
          }
        } catch (e) {
          voltmxmp.logger.error(JSON.stringify(e), voltmxmp.logger.EXCEPTION);
          if (e.error === "InvalidType") {
            throw e;
          }
        }
        voltmxmp.logger.trace("-----------------------------Setting isVisibleMenuItem1 End", voltmxmp.logger.FUNCTION_EXIT);
      });
      defineSetter(this, "isVisibleMenuItem2", function(value) {
        try {
          voltmxmp.logger.trace("----------------------------- Setting isVisibleMenuItem2 Start", voltmxmp.logger.FUNCTION_ENTRY);
          if (typeof(value) === 'boolean') {
            this.view.flxOption2.isVisible=value;
            this.setUIForFloatingAction();
          } else {
            throw {
              error: "InvalidType",
              message: "Floating Action isVisibleMenuItem2 should be of type boolean"
            };
          }
        } catch (e) {
          voltmxmp.logger.error(JSON.stringify(e), voltmxmp.logger.EXCEPTION);
          if (e.error === "InvalidType") {
            throw e;
          }
        }
        voltmxmp.logger.trace("-----------------------------Setting isVisibleMenuItem2 End", voltmxmp.logger.FUNCTION_EXIT);
      });
      defineSetter(this, "isVisibleMenuItem3", function(value) {
        try {
          voltmxmp.logger.trace("----------------------------- Setting isVisibleMenuItem3 Start", voltmxmp.logger.FUNCTION_ENTRY);
          if (typeof(value) === 'boolean') {
            this.view.flxOption3.isVisible=value;
            this.setUIForFloatingAction();
          } else {
            throw {
              error: "InvalidType",
              message: "Floating Action isVisibleMenuItem3 should be of type boolean"
            };
          }
        } catch (e) {
          voltmxmp.logger.error(JSON.stringify(e), voltmxmp.logger.EXCEPTION);
          if (e.error === "InvalidType") {
            throw e;
          }
        }
        voltmxmp.logger.trace("-----------------------------Setting isVisibleMenuItem3 End", voltmxmp.logger.FUNCTION_EXIT);
      });
      defineSetter(this, "isVisibleMenuItem4", function(value) {
        try {
          voltmxmp.logger.trace("----------------------------- Setting isVisibleMenuItem4 Start", voltmxmp.logger.FUNCTION_ENTRY);
          if (typeof(value) === 'boolean') {
            this.view.flxOption4.isVisible=value;
            this.setUIForFloatingAction();
          } else {
            throw {
              error: "InvalidType",
              message: "Floating Action isVisibleMenuItem4 should be of type boolean"
            };
          }
        } catch (e) {
          voltmxmp.logger.error(JSON.stringify(e), voltmxmp.logger.EXCEPTION);
          if (e.error === "InvalidType") {
            throw e;
          }
        }
        voltmxmp.logger.trace("-----------------------------Setting isVisibleMenuItem4 End", voltmxmp.logger.FUNCTION_EXIT);
      });
      defineSetter(this, "isVisibleMenuItem5", function(value) {
        try {
          voltmxmp.logger.trace("----------------------------- Setting isVisibleMenuItem5 Start", voltmxmp.logger.FUNCTION_ENTRY);
          if (typeof(value) === 'boolean') {
            this.view.flxOption5.isVisible=value;
            this.setUIForFloatingAction();
          } else {
            throw {
              error: "InvalidType",
              message: "Floating Action isVisibleMenuItem5 should be of type boolean"
            };
          }
        } catch (e) {
          voltmxmp.logger.error(JSON.stringify(e), voltmxmp.logger.EXCEPTION);
          if (e.error === "InvalidType") {
            throw e;
          }
        }
        voltmxmp.logger.trace("-----------------------------Setting isVisibleMenuItem5 End", voltmxmp.logger.FUNCTION_EXIT);
      });
      defineSetter(this, "menuItemType", function(value) {
        try {
          voltmxmp.logger.trace("----------------------------- Setting menuItemType Start", voltmxmp.logger.FUNCTION_ENTRY);
          if (typeof(value) === 'string') {
            this._menuItemType = value;
            this.setMenuItemDisplayType();
          } else {
            throw {
              error: "InvalidType",
              message: "Floating Action menuitem type should be of type string"
            };
          }
        } catch (e) {
          voltmxmp.logger.error(JSON.stringify(e), voltmxmp.logger.EXCEPTION);
          if (e.error === "InvalidType") {
            throw e;
          }
        }
        voltmxmp.logger.trace("-----------------------------Setting menuItemType End", voltmxmp.logger.FUNCTION_EXIT);
      });

      defineSetter(this, "animationType", function(value) {
        try {
          voltmxmp.logger.trace("----------------------------- Setting animationType Start", voltmxmp.logger.FUNCTION_ENTRY);
          if (typeof(value) === 'string') {
            this._animationType = value;
            this.setUIForFloatingAction();
          } else {
            throw {
              error: "InvalidType",
              message: "Floating Action animationType should be of type string"
            };
          }
        } catch (e) {
          voltmxmp.logger.error(JSON.stringify(e), voltmxmp.logger.EXCEPTION);
          if (e.error === "InvalidType") {
            throw e;
          }
        }
        voltmxmp.logger.trace("-----------------------------Setting animationType End", voltmxmp.logger.FUNCTION_EXIT);
      });

      defineSetter(this, "enableOverlay", function(value) {
        try {
          voltmxmp.logger.trace("----------------------------- Setting enableOverlay Start", voltmxmp.logger.FUNCTION_ENTRY);
          if (typeof(value) === 'boolean') {
            this._enableOverlay = value;
          } else {
            throw {
              error: "InvalidType",
              message: "Floating Action enableOverlay should be of type boolean"
            };
          }
        } catch (e) {
          voltmxmp.logger.error(JSON.stringify(e), voltmxmp.logger.EXCEPTION);
          if (e.error === "InvalidType") {
            throw e;
          }
        }
        voltmxmp.logger.trace("-----------------------------Setting enableOverlay End", voltmxmp.logger.FUNCTION_EXIT);
      });

      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function showMenu
		 * @scope private
		 * @description to show the menu items

		 */


    showMenu: function() {
      menustatus = true;
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_ENTRY);
      var deviceName = voltmx.os.deviceInfo().name.toLowerCase();
      this.view.flxMenu.onClick = this.emptyFunction.bind(this);
      this.view.flxMenu1.onClick = this.emptyFunction.bind(this);
      if (this._flag == 0) {
        this.gettingFrame(deviceName);
        this._flag = 1;
      }

      //this.gettingFrame(deviceName);
      this.animationStarts(deviceName);//2
      this.handlePrimaryButtonOnClick();
      this.handleMenuItem1onClick();
      this.handleMenuItem2onClick();
      this.handleMenuItem3onClick();
      this.handleMenuItem4onClick();
      this.handleMenuItem5onClick();
      if(deviceName === "thinclient"){
        this.view.flxMenu1.imgIcon2.src = "image.png";
        for(var k=1;k<=5;k++){
          this.view["lblOption"+k].isVisible = true;
          this.view["flxOption"+k].isVisible = true;
        }
      }

      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_EXIT);

    },
    /**
		 * @function hideMenu
		 * @scope private
		 * @description to hide the menu items
		 */
    hideMenu: function() {
      menustatus=false;
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_ENTRY);
      if(voltmx.os.deviceInfo().name.toLowerCase() === "thinclient")
      {
        for(var i=1;i<=5;i++){
          this.view["lblOption"+i].isVisible = false;
          this.view["flxOption"+i].isVisible = false;
        }
      }
      this.handlePrimaryButtonOnClick();
      this.rotatePrimaryButtonIcon(0);
      this.hideMenuItems();
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function createMenuItems
		 * @scope private
		 * @description to set UI and onclick events on the basis of animation selected
		 */
    createMenuItems: function(deviceName) {
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_ENTRY);
      if (this._animationType === "Default") {
        this.showMenuItems = this.showMenuItemsWithDefaultAnimation.bind(this,deviceName);
        this.hideMenuItems = this.hideMenuItemsWithDefaultAnimation.bind(this,deviceName);
        this.setUIForDefaultAnimation(deviceName);
      } else if (this._animationType === "Rise") {

        this.showMenuItems = this.showMenuItemsWithRiseAnimation.bind(this);
        this.hideMenuItems = this.hideMenuItemsWithRiseAnimation.bind(this);
        this.setUIForRiseAnimation();
      } else if (this._animationType === "Slide In") {
        this.showMenuItems = this.showMenuItemsWithSlideInAnimation;
        this.hideMenuItems = this.hideMenuItemsWithSlideInAnimation;
        this.setUIForSlideInAnimation();
      }
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function showMenuItemsWithDefaultAnimation
		 * @scope private
		 * @description to show menu items with default animation
		 */
    //here
    showMenuItemsWithDefaultAnimation: function(deviceName) {
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_ENTRY);

      this.generateCenterYArray(deviceName);
      this._rightoflblOption = this._widthInDp - this._frame.x;
      var y = this.generalizeWidthInPxPulsate(parseFloat(this.view.flxMenu1.width) / 2);
      var left = (y * this._widthInPx) * 100;
      var trans100 = voltmx.ui.makeAffineTransform();
      trans100.rotate(0);
      var divate = (3 * this._widthInDp) / 100;
      var divatefirst = (7 * this._widthInDp) / 100;
      var x = parseFloat(this.view.flxMenu1.centerX);
      // voltmx.application.showLoadingScreen();
      // voltmx.model.ApplicationContext.showLoadingScreen("tada");
      for (i = 1; i <= this._noOfSubMenu; i++) {
        var b = i - 1;
        this.view["lblOption" + i].animate(
          voltmx.ui.createAnimation({
            "60": {
              "right":this._rightoflblOption + divatefirst + "dp",
              "centerY": this.centerYArray[b] + "dp",
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              },
              "transform": trans100
            },
            "75": {
              "right": this._rightoflblOption - divatefirst + "dp",
              "centerY": this.centerYArray[b] + "dp",
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              },
              "transform": trans100
            },
            "100": {
              "right": (this._rightoflblOption) + "dp",
              "centerY": this.centerYArray[b] + "dp",
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              }
            },
          }), {
            "delay": 0.05 * i,
            "iterationCount": 1,
            "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
            "duration": 0.30
          }, { 
          });
        this.view["flxOption" + i].animate(
          voltmx.ui.createAnimation({
            "60": {
              "centerX": x - divate + "dp",
              "centerY": this.centerYArray[b] + "dp",
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              },
            },
            "75": {
              "centerX": x + divate + "dp",
              "centerY": this.centerYArray[b] + "dp",
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              },
            },
            "100": {
              "centerX": x + "dp",
              "centerY": this.centerYArray[b] + "dp",
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              },
            }
          }), {
            "delay": 0.05 * i,
            "iterationCount": 1,
            "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
            "duration": 0.30
          }, {
            "animationEnd": this.showItemsAnimationEnd.bind(this, i)
          }
        );

      }

      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_EXIT);

    },
    /**
		 * @function hideMenuItemsWithDefaultAnimation
		 * @scope private
		 * @description to hide menu items with default animation
		 */
    hideMenuItemsWithDefaultAnimation: function(deviceName) {
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_ENTRY);
      var trans100 = voltmx.ui.makeAffineTransform();
      deviceName ===  "thinclient" ? trans100.rotate(0):trans100.rotate(-60);
      var j = 1;

      for (var i = this._noOfSubMenu; i >= 1; i--) {
        var valueR = ( -110 - (i * 10))+ "%";
        this.view["lblOption" + i].animate(
          voltmx.ui.createAnimation({
            "99": {
              "right": deviceName === "thinclient" ? "60%": "-350%",
              "centerY": this.view.flxMenu1.centerY,
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              },
              "transform": trans100
            },

            "100": {
              "right": deviceName === "thinclient" ? "41%": valueR,
              "centerY": this.view.flxMenu1.centerY,
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              },
              "transform": trans100
            }
          }), {
            "delay": 0.01 * i,
            "iterationCount": 1,
            "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
            "duration": 0.2
          }, {

          });
        this.view["flxOption" + i].animate(
          voltmx.ui.createAnimation({
            "100": {
              "centerX": 110 + (i * 31) + "%",

              "centerY": this.view.flxMenu1.centerY,
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              },
            }

          }), {
            "delay": 0.01 * j,
            "iterationCount": 1,
            "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
            "duration": 0.2
          }, {
            "animationEnd": this.hideItemsAnimationEnd.bind(this, i,deviceName)
          });
        j++;
        if(deviceName === "thinclient"){
          var scrnWidth  = voltmx.os.deviceInfo().screenWidth;
          this.view.flxMenu.width = "100dp";
          this.view.flxMenu.height = "100dp";
          this.view.height = "100%";
          this.view.width = "450px";
          this.view.centerX = "88%";
          this.view.centerY = "91%";
          this.view.flxMenu1.isVisible = false;
          this.view.flxMenu.isVisible = true;
          this.view.flxMenu.onClick = this.showMenu;
          centery = 50; 
          this.view.forceLayout();
        }
        voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_EXIT);
      }
    },

    /**
		 * @function showMenuItemsWithRiseAnimation
		 * @scope private
		 * @description to show menu items with rise animation
		 */
    showMenuItemsWithRiseAnimation: function() {
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_ENTRY);
      this.generateCenterYArray();
      for (var j = 1; j <= this._noOfSubMenu; j++) {
        var b = j - 1;
        this.view["flxOption" + j].isVisible = true;
        if (this._menuItemType !== "Only Image") {
          this.view["lblOption" + j].isVisible = true;
        }
        this.view["lblOption" + j].animate(
          voltmx.ui.createAnimation({
            "100": {
              "centerY": this.centerYArray[b] + "dp",
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              },
              "opacity": 1.0


            }
          }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
            "duration": 0.4
          }, {

          }
        );

        this.view["flxOption" + j].animate(
          voltmx.ui.createAnimation({
            "100": {
              "centerY": this.centerYArray[b] + "%",
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              },
              "opacity": 1.0
            }
          }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
            "duration": 0.4
          }, {
            "animationEnd": this.showItemsAnimationEnd.bind(this, j)
          }
        );
      }
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function hideMenuItemsWithRiseAnimation
		 * @scope private
		 * @description to hide menu items with rise animation
		 */
    hideMenuItemsWithRiseAnimation: function() {
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_ENTRY);
      for (var j = 1; j <= this._noOfSubMenu; j++) {
        this.view["lblOption" + j].animate(
          voltmx.ui.createAnimation({
            "100": {
              "centerY": this.view.flxMenu1.centerY,
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              },
              "opacity": 0.0
            }
          }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
            "duration": 0.4

          }, {

          }
        );

        this.view["flxOption" + j].animate(
          voltmx.ui.createAnimation({
            "100": {

              "centerY": this.view.flxMenu1.centerY,
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              },
              "opacity": 0.0
            }
          }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
            "duration": 0.4
          }, {
            "animationEnd": this.hideItemsAnimationEnd.bind(this, j)
          }
        );
      }
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function showMenuItemsWithSlideInAnimation
		 * @scope private
		 * @description to show menu items with slide animation
		 */
    showMenuItemsWithSlideInAnimation: function() {
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_ENTRY);
      for (var j = 1; j <= this._noOfSubMenu; j++) {
        this.view["lblOption" + j].animate(
          voltmx.ui.createAnimation({
            "100": {
              "right": this._widthInDp - this._frame.x + "dp",
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              },
              "opacity": 1.0

            }
          }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
            "duration": 0.30
          }, {

          }
        );

        this.view["flxOption" + j].animate(
          voltmx.ui.createAnimation({
            "100": {
              "centerX": this.view.flxMenu1.centerX,
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              },
              "opacity": 1.0
            }
          }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
            "duration": 0.30
          }, {
            "animationEnd": this.showItemsAnimationEnd.bind(this, j)
          }
        );
      }
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function hideMenuItemsWithSlideInAnimation
		 * @scope private
		 * @description to hide menu items with slide animation
		 */
    hideMenuItemsWithSlideInAnimation: function() {
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_ENTRY);
      for (var j = 1; j <= this._noOfSubMenu; j++) {
        this.view["lblOption" + j].animate(
          voltmx.ui.createAnimation({
            "100": {
              "right": "-150%",
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              },
              "opacity": 0.0
            }
          }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
            "duration": 0.30
          }, {

          }
        );

        this.view["flxOption" + j].animate(
          voltmx.ui.createAnimation({
            "100": {
              "centerX": "150%",
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              },
              "opacity": 0.0
            }
          }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
            "duration": 0.30
          }, {
            "animationEnd": this.hideItemsAnimationEnd.bind(this, j)
          }
        );
      }
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function setMenuItemDisplayType
		 * @scope private
		 * @description to set menu type on basis of type selected
		 */
    setMenuItemDisplayType: function() {
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_ENTRY);
      var menuItemIndex = 1;
      this.view.flxMenu1.imgMain2.src = this.view.flxMenu.imgMain.src;
      this.view.flxMenu1.imgIcon2.src = this.view.flxMenu.imgIcon.src;
      if (this._menuItemType === "Only Image") {
        for (menuItemIndex = 1; menuItemIndex <= 5; menuItemIndex++) {
          this.view["lblOption" + menuItemIndex].isVisible = false;
        }
      } else if (this._menuItemType === "Image and Text") { 
        for (menuItemIndex = 1; menuItemIndex <= 5; menuItemIndex++) {
          this.view["lblOption" + menuItemIndex].isVisible = true;
        }
        for (var j = 1; j <= this._noOfSubMenu; j++) {
          this.view["lblOption" + j].centerY = this.view["flxOption" + j].centerY;
        }
        this._rightoflblOption = (100 + 2 + ((parseInt(this.view.flxOption1.width) / voltmx.os.deviceInfo().deviceWidth) * 100) - (parseInt(this.view.flxMenu.centerX))) + "%";
      }
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function setUIForFloatingAction
		 * @scope private
		 * @description to set UI for floating action
		 */
    setUIForFloatingAction: function() {

      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_ENTRY);
      this._noOfSubMenu = 0;
      for (var i = 1; i <= 5; i++) {
        if (this.view["flxOption" + i].isVisible === true) {
          this._noOfSubMenu += 1;
        } else {

          break;
        }
      }
      var devName = voltmx.os.deviceInfo().name.toLowerCase();
      var scrnWidth  = voltmx.os.deviceInfo().screenWidth;
      var scrn  = voltmx.os.deviceInfo().screenWidth;
      if(devName==="ipad"||(scrnWidth>=500&&scrnWidth<=1024)){
        this.view.flxMenu.width = "100dp";//this.generalizeWidthInPxPulsate(79.2) + "px";
        this.view.flxMenu.height = "100dp";//his.view.flxMenu.width;
      }else{
        this.view.flxMenu.width = this.generalizeWidthInPxPulsate(72) + "px";
        this.view.flxMenu.height = this.view.flxMenu.width;

      }
      this.view.flxMenu1.height = this.view.flxMenu.width;
      this.view.flxMenu1.width = this.view.flxMenu.width;
      this.view.height = this.view.flxMenu.width;
      this.view.width = this.view.flxMenu.width;
      this.view.flxMenu.onClick = this.showMenu.bind(this);
      this.view.flxMenu1.onClick = this.emptyFunction.bind(this);
      this._retainPosflx = this.view.flxOption1.centerX;
      this._retainPosLbl = this.view.lblOption1.right;
      this._leftOfFlxOption = this.view.flxMenu.centerX;
      this.initializeMenuItemsUI();
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function setUIForDefaultAnimation
		 * @scope private
		 * @description to set UI for Default animation
		 */
    setUIForDefaultAnimation: function(deviceName) {

      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_ENTRY);
      var scrnWidth  = voltmx.os.deviceInfo().screenWidth;
      var scrnHeight  = voltmx.os.deviceInfo().screenHeight;
      for (i = 1; i <= this._noOfSubMenu; i++) {
        if(deviceName === "thinclient"){
          centery = centery-9;
          this.view["flxOption" + i].centerX = 50+"%";
            //this.view["flxOption" + i].width = this.generalizeWidthInPxPulsate(20) + "px";
          this.view["flxOption" + i].width = this.generalizeWidthInPxPulsate(20) + "px";
          this.view["flxOption" + i].centerY = (centery)+"%";
          this.view["flxOption" + i].height = this.view["flxOption" + i].width;
          this.view["lblOption" + i].right = "60%";
          this.view["lblOption" + i].centerY = (centery)+"%";

        }
        else{
          this.view["flxOption" + i].centerX = 110 + (i * 50) + "%";
          this.view["flxOption" + i].centerY = this.view.flxMenu1.centerY;
          deviceName==="ipad"||(scrnWidth>=500&&scrnWidth<=1024)?this.view["flxOption" + i].width = this.generalizeWidthInPxPulsate(48) + "px":this.view["flxOption" + i].width = this.generalizeWidthInPxPulsate(72)+ "px" ;
          this.view["flxOption" + i].height = this.view["flxOption" + i].width;
          this.view["lblOption" + i].centerY = this.view["flxOption" + i].centerY;
          this.view["lblOption" + i].right = -110 - (i * 50) + "%";

          if(deviceName==="ipad"||(scrnWidth>=500&&scrnWidth<=1024)){
            this.view.flxMenu.height="100dp";
            this.view.flxMenu.width="100dp";
            this.view.flxMenu1.width="100dp";
            this.view.flxMenu1.height="100dp";

          }
        }
      }
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function setUIForRiseAnimation
		 * @scope private
		 * @description to set UI for Rise animation
		 */
    setUIForRiseAnimation: function() {
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_ENTRY);
      for (var a = 1; a <= this._noOfSubMenu; a++) {
        this.view["flxOption" + a].centerX = this.view.flxMenu1.centerX;
        this.view["flxOption" + a].centerY = this.view.flxMenu1.centerY;
        this.view["flxOption" + a].width = this.generalizeWidthInPxPulsate(72) + "px";
        this.view["flxOption" + a].height = this.view["flxOption" + a].width;
        this.view["lblOption" + a].centerY = this.view["flxOption" + a].centerY;
        this.view["lblOption" + a].right = this._widthInDp - this._frame.x + "dp";
        this.view["flxOption" + a].isVisible = true;
        this.view["lblOption" + a].isVisible = true;
      }
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function setUIForSlideInAnimation
		 * @scope private
		 * @description to set UI for Slide animation
		 */
    setUIForSlideInAnimation: function() {
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_ENTRY);
      for (var a = 1; a <= this._noOfSubMenu; a++) {
        this.view["flxOption" + a].width = this.generalizeWidthInPxPulsate(72) + "px";
        this.view["flxOption" + a].height = this.view["flxOption" + a].width;
      }
      this.generateCenterYArray();
      for (a = 1; a <= this._noOfSubMenu; a++) {
        this.view["flxOption" + a].centerY = this.centerYArray[a - 1] + "dp";
        this.view["lblOption" + a].centerY = this.centerYArray[a - 1] + "dp";
        this.view["lblOption" + a].right = "-150%";
      }
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function showItemsAnimationEnd
		 * @scope private
		 * @description to set onClick of primary button after Show animation ends
		 */
    showItemsAnimationEnd: function(itemNum) {
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_ENTRY);
      //voltmx.application.dismissLoadingScreen();
      //voltmx.model.ApplicationContext.dismissLoadingScreen();
      if (itemNum === this._noOfSubMenu) {
        this.view.flxMenu.onClick = this.emptyFunction.bind(this);
        this.view.flxMenu1.onClick = this.hideMenu.bind(this);
      }
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function hideItemsAnimationEnd
		 * @scope private
		 * @description to set onClick of primary button after hide animation ends
		 */
    hideItemsAnimationEnd: function(itemNum,deviceName) {
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_ENTRY);

      if (itemNum === this._noOfSubMenu) {
        this.view.flxMenu.onClick = this.showMenu.bind(this);
        this.view.flxMenu1.onClick = this.emptyFunction.bind(this);
        this.view.imgOverlay.isVisible = false;
        this.rePosParent(deviceName);
      }
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function rotatePrimaryButtonIcon
		 * @scope private
		 * @description to animate the primary button icon
		 */
    rotatePrimaryButtonIcon: function(angle) {

      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_ENTRY);
      if (this._noOfSubMenu !== 0) {
        var trans100 = voltmx.ui.makeAffineTransform();
        trans100.rotate(angle);

        this.view.imgIcon.animate(
          voltmx.ui.createAnimation({
            "100": {
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              },
              "transform": trans100
            }
          }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
            "duration": 0.40
          }, {

          }
        );
        this.view.imgIcon2.animate(
          voltmx.ui.createAnimation({
            "100": {
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              },
              "transform": trans100
            }
          }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
            "duration": 0.40
          }, {

          }
        );
      } 

      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_EXIT);

    },
    /**
		 * @function emptyFunction
		 * @scope private
		 * @description to assign this function on onclick
		 */
    emptyFunction: function() {
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_ENTRY);
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function handlePrimaryButtonOnClick
		 * @scope private
		 * @description to handle onClickPrimaryButton when there is no event assigned by user
		 */
    handlePrimaryButtonOnClick: function() {
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_ENTRY);
      if (this._noOfSubMenu !== 0) {
        this.view.flxMenu.onClick = this.showMenu.bind(this);
      }
      var self = this;
      if (self.onClickPrimaryButton) {
        self.onClickPrimaryButton();
        this.view.flxMenu.onClick = this.showMenu.bind(this);
      }
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function handleMenuItem1onClick
		 * @scope private
		 * @description to assign onClick of Menu1
		 */
    handleMenuItem1onClick: function() {
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_ENTRY);
      this.view.flxOption1.onClick = this.onClickOfMenuItem1.bind(this);
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function onClickOfMenuItem1
		 * @scope private
		 * @description to handle onClickOfMenuItem1 when there is no event assigned by user
		 */
    onClickOfMenuItem1: function() {
      var self = this;
      if (self.onClickMenuItem1 !== null && self.onClickMenuItem1 !== undefined && typeof(self.onClickMenuItem1) == "function") {
        self.onClickMenuItem1();
      }
      this.hideMenu();
    },
    /**
		 * @function handleMenuItem2onClick
		 * @scope private
		 * @description to assign onClick of Menu2
		 */
    handleMenuItem2onClick: function() {
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_ENTRY);
      this.view.flxOption2.onClick = this.onClickOfMenuItem2.bind(this);
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function onClickOfMenuItem2
		 * @scope private
		 * @description to handle onClickOfMenuItem2 when there is no event assigned by user
		 */
    onClickOfMenuItem2: function() {
      var self = this;
      if (self.onClickMenuItem2 !== null && self.onClickMenuItem2 !== undefined && typeof(self.onClickMenuItem2) !== "undefined") {
        self.onClickMenuItem2();
      }
      this.hideMenu();
    },
    /**
		 * @function handleMenuItem3onClick
		 * @scope private
		 * @description to assign onClick of Menu3
		 */
    handleMenuItem3onClick: function() {
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_ENTRY);
      this.view.flxOption3.onClick = this.onClickOfMenuItem3.bind(this);
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function onClickOfMenuItem3
		 * @scope private
		 * @description to handle onClickOfMenuItem3 when there is no event assigned by user
		 */
    onClickOfMenuItem3: function() {
      var self = this;
      if (self.onClickMenuItem3 !== null && self.onClickMenuItem3 !== undefined && typeof(self.onClickMenuItem3) == "function") {
        self.onClickMenuItem3();
      }
      this.hideMenu();
    },
    /**
		 * @function handleMenuItem4onClick
		 * @scope private
		 * @description to assign onClick of Menu4
		 */
    handleMenuItem4onClick: function() {
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_ENTRY);
      this.view.flxOption4.onClick = this.onClickOfMenuItem4.bind(this);
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function onClickOfMenuItem4
		 * @scope private
		 * @description to handle onClickOfMenuItem4 when there is no event assigned by user
		 */
    onClickOfMenuItem4: function() {
      var self = this;
      if (self.onClickMenuItem4 !== null && self.onClickMenuItem4 !== undefined && typeof(self.onClickMenuItem4) == "function") {
        self.onClickMenuItem4();
      }
      this.hideMenu();
    },
    /**
		 * @function handleMenuItem5onClick
		 * @scope private
		 * @description to assign onClick of Menu5
		 */
    handleMenuItem5onClick: function() {
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_ENTRY);
      this.view.flxOption5.onClick = this.onClickOfMenuItem5.bind(this);
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function onClickOfMenuItem5
		 * @scope private
		 * @description to handle onClickOfMenuItem5 when there is no event assigned by user
		 */
    onClickOfMenuItem5: function() {
      var self = this;
      if (self.onClickMenuItem5 !== null && self.onClickMenuItem5 !== undefined && typeof(self.onClickMenuItem5) == "function") {
        self.onClickMenuItem5();
      }
      this.hideMenu();
    },
    /**
		 * @function setOverlay
		 * @scope private
		 * @description to handle overlay
		 */
    setOverlay: function() {
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_ENTRY);
      if ((this._enableOverlay === true) && (this._noOfSubMenu > 0)) {
        this.view.imgOverlay.isVisible = true;
      }
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function generateCenterYArray
		 * @scope private
		 * @description to handle difference between menu options
		 */
    generateCenterYArray: function(deviceName) {
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_ENTRY);
      this.centerYArray = [];
      var centerY = parseFloat(this.view.flxMenu1.centerY);
      var scrnWidth  = voltmx.os.deviceInfo().screenWidth;
      deviceName==="ipad"||(scrnWidth>=500&&scrnWidth<=1024)?this.centerYArray.push(centerY - 84):this.centerYArray.push(centerY - 70);//70

      for (var i = 1; i < this._noOfSubMenu; i++) {

        deviceName==="ipad"||(scrnWidth>=500&&scrnWidth<=1024)?this.centerYArray.push((this.centerYArray[i - 1])-90):this.centerYArray.push((this.centerYArray[i - 1])-65);//65

      }
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function generateCenterYArray
		 * @scope private
		 * @description to handle difference between menu options
		 */
    initializeMenuItemsUI: function() {
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_ENTRY);
      for (var z = 1; z <= 5; z++) {
        this.view["lblOption" + z].isVisible = false;
        if (this._menuItemType !== "Only Image") {
          for (var y = 1; y <= 5; y++) {
            if (this.view["flxOption" + y].isVisible === true) {
              this.view["lblOption" + y].isVisible = true;
            } else {
              break;
            }
          }
        }
      }

      if (this.view.flxOption1.isVisible === true) {
        this._SubMenuAnimation = "true";
      }

      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function generalizeWidthInPx
		 * @description Its used to calculate width in px for device resolution.
		 * @param px
		 */
    generalizeWidthInPxPulsate: function(px) {
      try {
        voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_ENTRY);
        px = parseFloat(px);
        if (!isNaN(px)) {
          return parseInt(px * (voltmx.os.deviceInfo().deviceWidth / parseInt(360)));
        }
        return null;
      } catch (exception) {
        voltmx.logger.error(JSON.stringify(exception), voltmx.logger.EXCEPTION);
      }
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function generalizeHeightInPx
		 * @description Its used to calculate height in px for device resolution.
		 * @param px
		 */
    generalizeHeightInPxPulsate: function(px) {
      try {
        voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_ENTRY);
        px = parseFloat(px);
        if (!isNaN(px)) {
          return parseInt(px * (voltmx.os.deviceInfo().deviceHeight / parseInt(667)));
        }
        return null;
      } catch (exception) {
        voltmx.logger.error(JSON.stringify(exception), voltmx.logger.EXCEPTION);
      }

      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function fitToParent
		 * @scope private
		 * @description to change the height and width of component to 100%
		 */
    fitToParent: function() {
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_ENTRY);
      this.view.height = "100%";
      this.view.width = "100%";
      this.view.centerX = "50%";
      this.view.centerY = "50%";
      this.view.flxMenu1.animate(
        voltmx.ui.createAnimation({
          "100": {
            "stepConfig": {
              "timingFunction": voltmx.anim.EASE
            },
            "opacity": 1
          }
        }), {
          "delay": 0,
          "iterationCount": 1,
          "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
          "duration": 0
        }, {
          "animationEnd": this.callAnimation  //3
        }
      );
      this.view.flxMenu1.isVisible = true;
      this.view.flxMenu.isVisible = false;
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function callAnimation
		 * @scope private
		 * @description to call all the animations to show menu items
		 */
    callAnimation: function() {
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_ENTRY);
      this.setOverlay();
      this.rotatePrimaryButtonIcon(135);
      this.showMenuItems();
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function gettingFrame
		 * @scope private
		 * @description to get the frame
		 */
    gettingFrame: function(deviceName) {
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_ENTRY);

      this._frame = this.view.frame;

      this._deviceInfo = voltmx.os.deviceInfo();
      this._widthInDp = this._deviceInfo.screenWidth;
      this._heightInDp = this._deviceInfo.screenHeight;
      this._widthInPx = this._deviceInfo.deviceWidth;
      this._heightInPx = this._deviceInfo.deviceHeight;
      this._centerX = (this._frame.x + (this._frame.width) / 2) + "dp";
      this._centerY = (this._frame.y + (this._frame.height) / 2) + "dp";
      if(deviceName === "thinclient"){

        this.view.flxMenu1.centerX = 50+"%";
        this.view.flxMenu1.centerY = 50+"%";


      }
      else{

        this.view.flxMenu1.centerX = this._centerX;
        this.view.flxMenu1.centerY = this._centerY;

      }

      this.createMenuItems(deviceName);
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function rePosParent
		 * @scope private
		 * @description to change the height and width of component to intial
		 */
    rePosParent: function(deviceName) {
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_ENTRY);
      deviceName === "thinclient"?this.view.centerX = "88%":this.view.centerX =this._centerX;
      deviceName === "thinclient"?this.view.centerY = "91%":this.view.centerY =this._centerY;
      deviceName === "thinclient"?this.view.width ="450px":this.view.width =this.view.flxMenu.width;
      deviceName === "thinclient"?this.view.height = "100%":this.view.height =this.view.flxMenu.height;
      if(deviceName === "thinclient"){
        this.view.flxMenu1.imgIcon2.src = "image.png";
      }
      this.view.flxMenu.isVisible = true;
      this.view.flxMenu1.isVisible = false;
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function animationStarts
		 * @scope private
		 * @description initial animation to change the opacity of primary button
		 */
    animationStarts: function(deviceName) {
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_ENTRY);

      if (this._noOfSubMenu === 0) {} else {
        this.view.flxMenu1.animate(
          voltmx.ui.createAnimation({
            "100": {
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              },
              "opacity": 0.9
            }
          }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
            "duration": 0
          }, {
            "animationEnd": this.fitToParent //3
          }
        );
      }

      if(deviceName === "thinclient"){
        this.view.flxMenu1.width = "100dp";
        this.view.flxMenu1.height = "100dp";
        this.view.height = "100%";
        this.view.width = "450px";
        this.view.centerX = "88%";
        this.view.centerY = "91%";
        this.view.flxMenu1.isVisible = true;
        this.view.flxMenu.isVisible = false;
        this.view.flxMenu1.onClick=()=>{
          this.view.flxMenu1.isVisible = false;
          this.view.flxMenu.isVisible = true;
          this.hideMenu();
        };
      }
      voltmxmp.logger.debug("", voltmxmp.logger.FUNCTION_EXIT);
    }
  };
});