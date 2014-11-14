/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    $("#selectpage").click(function(){
       var table = $('#example1').dataTable();
        table.fnPageChange(1,true);
    });
    $(".firstpage_function1").click(function(){
        var inputs  =   $('.firstpage_function1');
        var index   =   inputs.index($(this));
        //$(".search_insert_hidden:eq("+index+")").val("1");
        var p = $(this).offset();
        var nh = $(this).outerHeight();
        var pos = {top:p.top+nh,left:p.left};
        var imenu = $("#idMenu"+index);
        function1(pos,imenu,index);
        return false;
    });
    function function1(pos,imenu,n){
    $(imenu).css({top: pos.top, left: pos.left, position:'absolute'});
    $(imenu).show();
    var lis = $(imenu).find("li");
   // lis[0].bind(showpopup1);
    $(lis[0]).bind("click",{menuorder:"0"},showpopup1);
    $(lis[1]).bind("click",{menuorder:"1"},showpopup1);
    $(lis[2]).bind("click",{btnorder:n},showpopup2);
    //$(lis[0]).bind("click",showpopup1);
    return true;
    }
    function showpopup1(event)//
    {
        var data = event.data;
        var menuid = data.menuorder;
        $(this).parent().parent().css("display","none");
        //firstpage_type0dialog1
        $("#firstpage_type0dialog"+menuid).modal('show');
        var parent = $(this).parent();
        $(parent).children().each(function(i){
            $(this).unbind("click");
        });
    }
    function showpopup2(event)
    {
        var data = event.data;
        var btnid = data.btnorder;
        $(this).parent().parent().css("display","none");
        $("#firstpage_type1dialog"+btnid).modal('show');
        var parent = $(this).parent();
        $(parent).children().each(function(i){
            $(this).unbind("click");
        });
    }
    
    
    $("#table_first_1_function1").click(function(){
        $("#firstpage_dialog1").modal('show');
    });
    $("#table_first_1_function2").click(function(){
        $("#firstpage_dialog3").modal('show');
    });
});
