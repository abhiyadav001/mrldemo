Mushroom.factory('circularMenuService', function () {
    return{
        create: function (data) {
            var menuList = data.content;
            //find number of dials
            var numberOfDials = _.size(menuList);
            //create canvas for dialer
            var dialerWrapper = createCanvas();
            createDial();
            //if dials less than 4 then we create a static dialer without scroll effect
            if (numberOfDials > 4) {
                setDialDraggable();
            }
            else {
                $("#dialerDiv .dial").addClass('fourDials');
            }
            function createCanvas() {
                var dialerWrapper = document.getElementById('dialerDiv');
                container = document.createElement('div');
                container.className = 'container';
                fullRotation = 360;
                rotationStep = fullRotation / numberOfDials;
                TweenMax.set(dialerWrapper, {
                    width: '100%',
                    y: 0
                });
                return dialerWrapper;
            }
            function getDials(data) {
                return "<a href='"+data.url+"'><div class='imageHolder'><img src='"+data.icon+"'></div><div class='profileText'><span>" + data.title + "</span></div></a>";
            }

            function createDial() {
                dial = document.createElement('div');
                dial.className = 'dial';
                var dialer = {
                    width: 500,
                    height: 500
                };
                TweenMax.set(dial, {
                    position: 'absolute',
                    left: '0%',
                    xPercent: 0,
                    width: dialer.width,
                    height: dialer.height,
                    borderRadius: '50%'
                });
                var dialerDimensions = {
                    width: 90,
                    height: 90
                };
                var dialNumContainer, dialNum;

                //for each item in Dialer
                var i = 0;
                angular.forEach(menuList, function (menu) {
                    dialNumContainer = document.createElement('div');
                    TweenMax.set(dialNumContainer, {
                        position: 'absolute',
                        x: dialer.width / 2 - dialerDimensions.width / 2,
                        y: 0,
                        width: dialerDimensions.width,
                        height: dialerDimensions.height,
                        rotation: rotationStep * i,
                        textAlign: 'center',
                        transformOrigin: '50% ' + dialer.height / 2 + 'px'
                    });

                    dialNum = document.createElement('div');
                    dialNum.className = 'dial-number';
                    console.log("Menu :",JSON.stringify(menu))
                    dialNum.innerHTML = getDials(menu);
                    TweenMax.set(dialNum, {
                        position: 'absolute',
                        width: dialerDimensions.width,
                        height: dialerDimensions.height,
                        paddingTop:'5px'
                    });
                    dialNum.initRotation = rotationStep * i;
                    dialNumContainer.appendChild(dialNum);
                    dial.appendChild(dialNumContainer);
                    i++;
                });
                dialerWrapper.appendChild(dial);
                setNumberRotation();
            }

            function setDialDraggable() {
                Draggable.create('.dial', {
                    type: 'rotation',
                    dragResistance: 0,
                    maxDuration: 1,
                    throwResistance: 0,
                    throwProps: true,
                    onDrag: setNumberRotation,
                    onThrowUpdate: setNumberRotation,
                    ease: Back.easeOut.config(0.3)
                });
            }

            function setNumberRotation() {
                var i = document.getElementsByClassName('dial-number').length, currNum;
                while (--i > -1) {
                    currNum = document.getElementsByClassName('dial-number')[i];
                    TweenMax.set(currNum, { rotation: -dial._gsTransform.rotation - currNum.initRotation });
                }
            }
        }
    }
})
