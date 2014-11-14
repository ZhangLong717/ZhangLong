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
    $(lis[0]).bind("click",showpopup1);
    return true;
}
    function showpopup1()
    {
        $(this).parent().parent().css("display","none");
        //alert("showpopup1");
        $('#myModal').modal('show');
        $(this).unbind("click");
    }
});
