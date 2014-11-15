/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    $(".tingyong").click(function(){
        var rowid = $(this).parent().data("rowid");
        //alert(rowid);
        var tds = $(this).parent().parent().find("td");
        var text1 = $(tds[1]).html();
        text1 = "("+ text1 +")";
        var item1 = $("span.text1")[0];
        $("#customtable_dialog_tingyong").find(item1).html(text1);
        //$("#customtable_dialog_tingyong").modal('show');
        $("#customtable_dialog_tingyong").modal('show');
        return false;
    });
    $(".huifu").click(function(){
        var rowid = $(this).parent().data("rowid");
        $("#customtable_dialog_mquanxian").modal('show');
        return false;
    });
    $(".sanchu").click(function(){
        var rowid = $(this).parent().data("rowid");
        $("#customtable_dialog_mquanxian").modal('show');
        return false;
    });
    $(".customtable>table>tbody>tr").click(function(){
       //alert("sss") ;
       window.location = currentpage + "_table.html"
       //alert(currentpage);
    });
});

