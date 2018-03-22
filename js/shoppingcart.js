$(function(){
    
    //2、点击 加号       
    $z = Number($('.zjs').html());       //当前的总价
  
    $('.fuh2').each(function(index){
        $(this).click(function(){
            $i = Number($('.num').eq(index).val());        //当前的数量  
            $x = Number($('.xiaoji').eq(index).html());   //当前的小计
            $i=Number($i+1);                                    //点击后的数量
            $x=$x+Number($('.dj').eq(index).html());            //点击后的小计
            $z=$z+Number($('.dj').eq(index).html());             //点击后的总重量 
            $('.num').eq(index).val($i);
            $('.xiaoji').eq(index).html($x);
            $('.zjs').html($z);
        });
    });
    //3、点击 减号
    $('.fuh1').each(function(index){
        $(this).click(function(){
            $i = Number($('.num').eq(index).val());        //当前的数量 
            $x = Number($('.xiaoji').eq(index).html());   //当前的小计
            $i=Number($i-1);                                   //点击后的数量
            $x=$x-Number($('.dj').eq(index).html());            //点击后的小计
            $z=$z-Number($('.dj').eq(index).html());            //点击后的总计
            $('.num').eq(index).val($i);
            $('.xiaoji').eq(index).html($x);
            $('.zjs').html($z);
        });
    });

        $.ajax({
            type:"get",
            url:"getShoppingCart.php",
            data:{"vipName":"sunxin"},
            success:function (data) {
                showgoodscart(data);
                //单选
                $('.check_box').bind('click',function(){
                    $(this).toggleClass('active');
                    if($('.check_box').hasClass('active')){
                        $('.checkedAll').addClass('active'); 
                    }else{
                        $('.checkedAll').removeClass('active'); 
                    }
                })
                //全选
                $('.checkedAll').bind('click',function(){
                    $(this).toggleClass('active');
                    if($('.checkedAll').hasClass('active')){
                        $('tbody .check_box').addClass('active');
                    }else{
                        $('tbody .check_box').removeClass('active'); 
                    }
                })

                //商品数量加减
                $('.plus_btn').click(function(){
                    var curNum = $(this).siblings('span').html();
                    curNum++;
                    $(this).siblings('span').html(curNum);
                    var goodsId=$(this).parent().parent().siblings('.td3').children('h4').attr('goodsId');
                    console.log('goodsId为'+goodsId);
                    $(function () {
                        $.ajax({
                            type:"get",
                            url:"updateGoodsCount.php",
                            data:{"vipName":"sunxin","goodsId":goodsId,"goodsCount":curNum},
                            success:function (data) {
                                if(data===1){
                                    alert('修改成功');
                                }
                                if(data===0){
                                    alert('修改失败');
                                }
                            },
                            dataType:"json"
                        });
                    });

                })

                $('.reduce_btn').click(function(){
                    var curNum = $(this).siblings('span').html();
                    if(curNum>1){
                        curNum--;
                        $(this).siblings('span').html(curNum);
                    }
                    var goodsId=$(this).parent().parent().siblings('.td3').children('h4').attr('goodsId');
                    console.log('goodsId为'+goodsId);
                    $(function () {
                        $.ajax({
                            type:"get",
                            url:"updateGoodsCount.php",
                            data:{"vipName":"sunxin","goodsId":goodsId,"goodsCount":curNum},
                            success:function (data) {
                                if(data===1){
                                    alert('修改成功');
                                }
                                if(data===0){
                                    alert('修改失败');
                                }
                            },
                            dataType:"json"
                        });
                    });
                })

                

                $('.del_box').click(function(){
                    $(this).parent().parent().remove();  //删除页面的商品
                    var goodsId=$(this).parent().siblings('.td3').children('h4').attr('goodsId');
                    $(function () {
                        $.ajax({
                            type:"get",
                            url:"deleteGoods.php",
                            data:{"vipName":"sunxin","goodsId":goodsId},
                            success:function (data) {
                                // console.log(data);
                                if(data===1){
                                    alert('删除成功');
                                }
                                if(data===0){
                                    alert('删除失败');
                                }
                            },
                            dataType:"json"
                        });
                    });
                })


            },
            dataType:"json"
        });
 
    // function saveCookie(cookieName,cookieValue,cookieDates){
    //     var d = new Date();
    //     var t = d.getDate()+cookieDates;
    //     d.setDate(t);
    //     document.cookie=cookieName+"="+escape(cookieValue)+";expires="+d.toGMTString();
    // }

});

function showgoodscart(datas) {
        let $ulbox = $("#ulbox");
        for(let i=0;i<datas.length;i++){
            let str = `<ul>
        
		            <li>
		                <p><img src="img/ej1.png" alt=""><span>MAX500高保真双驱动环绕音效耳机</span></p>
		                <p >￥<span class='dj'>249</span></p>
		                <p></p>
		                <p>有库存</p>
		                <p><input type="button" value="-" class='fuh fuh1'><input type="text" value="1" class='num'><input type="button" value="+" class='fuh fuh2'></p>
		                
		                <p>￥<span class='xiaoji'>249</span></p>
		                
		                <p><span id='shouC'>收藏</span><span id='shanS<br />'>删除</span></p>
		            </li>
		            
		        </ul>`;
            $ulbox.append(str);
        }
    }

