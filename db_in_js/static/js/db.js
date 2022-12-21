$(document).ready(function () {

    Homepagination();

})
function Homepagination() {
    $.ajax({
        url: '/datas/',
        type: 'GET',

        success: function (data) {
            var val;
            var len = data.data.length;
            var page = len / 40;
            $('#rowdata').html("");
            $('#range').val($('#rangedatas').html());
            $('#filterdata').val($('#filterdatas').html());
            $('#serching').val("");
            $('#validation').html("HELLO");
            $('#validation').css('color', 'black');
            $('#valnav').css("border", '3px solid black');
            for (var i = 0; i < data.data.length; i++) {
                val = data.data[i];

                $('#rowdata').append(`<tr  id= "${val.id}">
                <td  class='text-center'>${val.id}</td>
                <td  class='text-center'>${val.Age}</td>
                <td  class='text-center'>${val.Sex}</td>
                <td  class='text-center'>${val.Job}</td>
                <td  class='text-center'>${val.Housing}</td>
                <td  class='text-center'>${val.Saving_accounts}</td>
                <td  class='text-center'>${val.Checking_account}</td>
                <td  class='text-center'>${val.Credit_amount}</td>
                <td  class='text-center'>${val.Duration}</td>
                <td  class='text-center'>${val.Purpose}</td>
                </tr>

                `);
            }

            $('#page').html("");
            var pagenum;
            for (i = 0; i < page; i++) {
                pagenum=i+1;
                $('#page').append("<li class='page-item' id=" + i + ">" + "<a class='page-link' rel=" + i + ">" + pagenum + "</a></li>");
            }

            $('#page').html();

            $('#rowdata tr').hide();
            $('#rowdata tr').slice(0, 40).show();
            $('#page li a:first').addClass('active');
            $('#page li a').bind('click', function () {
                $('#page li a').removeClass('active');
                $(this).addClass('active');
                var currPage = $(this).attr('rel');
                var currentpage = parseInt(currPage);
                var start = currentpage * 40;
                var end = start + 40;
                $('#rowdata tr').css('opacity', '0.0').hide().slice(start, end).
                    css('display', 'table-row').animate({ opacity: 1 }, 300);
            });



        }

    });

}
function range_page() {
    var range = $('#range').val();

    $.ajax({
        url: '/datas/',
        type: 'GET',
        success: function (data) {
            var listdata = parseInt(range);
            var page = data.data.length / listdata;
            $('#page').html("");
            var pagenum;
            for (i = 0; i < page; i++) {
                pagenum=i+1;
                $('#page').append("<li class='page-item' id=" + i + ">" + "<a class='page-link' rel=" + i + ">" + pagenum + "</a></li>");
            }

            $('#page').html();
            $('#rowdata tr').hide();
            $('#rowdata tr').slice(0, listdata).show();
            $('#page li a:first').addClass('active');
            $('#page li a').bind('click', function () {
                $('#page li a').removeClass('active');
                $(this).addClass('active');
                var currPage = $(this).attr('rel');
                var currentpage = parseInt(currPage);
                var start = currentpage * listdata;
                var end = start + listdata;
                $('#rowdata tr').css('opacity', '0.0').hide().slice(start, end).
                    css('display', 'table-row').animate({ opacity: 1 }, 300);
            });

        }

    })
}
function Pagination() {
    $.ajax({
        url: '/datas/',
        type: 'GET',
        success: function (data) {
            var len = data.data.length;
            var page = len / 40;
            $('#page').html("");
            var pagenum;
            for (i = 0; i < page; i++) {
                pagenum=i+1;
                $('#page').append("<li class='page-item' id=" + i + ">" + "<a class='page-link' rel=" + i + ">" + pagenum + "</a></li>");
            }

            $('#page').html();
            $('#rowdata tr').hide();
            $('#rowdata tr').slice(0, 40).show();
            $('#page li a:first').addClass('active');
            $('#page li a').bind('click', function () {
                $('#page li a').removeClass('active');
                $(this).addClass('active');
                var currPage = $(this).attr('rel');
                var currentpage = parseInt(currPage);
                var start = currentpage * 40;
                var end = start + 40;
                $('#rowdata tr').css('opacity', '0.0').hide().slice(start, end).
                    css('display', 'table-row').animate({ opacity: 1 }, 300);
            });
        }
    })
}



$(".header").on("click", function () {

    var header = $(this).html();

    $.ajax({
        url: '/datas/',
        type: 'GET',
        success: function (data) {
            if (header == 'Age') {

                var str = $('#age')[0];

                if (str.dataset.order == 'asec') {
                    var data_array = data["data"];
                    data_array.sort(function (a, b) {
                        return a.Age - b.Age; //67-22 45
                    })
                    $("#rowdata").html("")
                    for (var i = 0; i < data_array.length; i++) {
                        $("#rowdata").append(`<tr><td class="text-center">${data_array[i].id}</td>
                            <td class="text-center" style='font-size:18px;'><b>${data_array[i].Age}</b></td>
                            <td class="text-center">${data_array[i].Sex}</td>
                            <td class="text-center">${data_array[i].Job}</td>
                            <td class="text-center">${data_array[i].Housing}</td>
                            <td class="text-center">${data_array[i].Saving_accounts}</td>
                            <td class="text-center">${data_array[i].Checking_account}</td>
                            <td class="text-center">${data_array[i].Credit_amount}</td>
                            <td class="text-center">${data_array[i].Duration}</td>
                            <td class="text-center">${data_array[i].Purpose}</td>
                            </tr>`)
                    }
                    str.dataset.order = 'desc'

                    Pagination();

                }
                else {
                    var data_array = data["data"];
                    data_array.sort(function (a, b) {
                        return b.Age - a.Age; 
                    })
                    $("#rowdata").html("")
                    for (var i = 0; i < data_array.length; i++) {
                        $("#rowdata").append(`<tr><td class="text-center">${data_array[i].id}</td>
                            <td class="text-center" style='font-size:18px;'><b>${data_array[i].Age}</b></td>
                            <td class="text-center">${data_array[i].Sex}</td>
                            <td class="text-center">${data_array[i].Job}</td>
                            <td class="text-center">${data_array[i].Housing}</td>
                            <td class="text-center">${data_array[i].Saving_accounts}</td>
                            <td class="text-center">${data_array[i].Checking_account}</td>
                            <td class="text-center">${data_array[i].Credit_amount}</td>
                            <td class="text-center">${data_array[i].Duration}</td>
                            <td class="text-center">${data_array[i].Purpose}</td>
                            </tr>`)
                    }
                    str.dataset.order = 'asec'
                    Pagination();
                }
            }

            if (header == 'Sex') {
                var str = $('#sex')[0];
                if (str.dataset.order == 'asec') {
                    var data_array = data['data'];
                    data_array.sort((a, b) =>
                        a.Sex.localeCompare(b.Sex)
                    )
                    $("#rowdata").html("")
                    for (var i = 0; i < data_array.length; i++) {
                        $("#rowdata").append(`<tr><td class="text-center">${data_array[i].id}</td>
                            <td class="text-center">${data_array[i].Age}</td>
                            <td class="text-center" style='font-size:18px;'><b>${data_array[i].Sex}</b></td>
                            <td class="text-center">${data_array[i].Job}</td>
                            <td class="text-center">${data_array[i].Housing}</td>
                            <td class="text-center">${data_array[i].Saving_accounts}</td>
                            <td class="text-center">${data_array[i].Checking_account}</td>
                            <td class="text-center">${data_array[i].Credit_amount}</td>
                            <td class="text-center">${data_array[i].Duration}</td>
                            <td class="text-center">${data_array[i].Purpose}</td>
                            </tr>`)
                    }
                    str.dataset.order = 'desc';
                    Pagination();

                }
                else {
                    var data_array = data['data'];
                    data_array.sort((a, b) =>
                        b.Sex.localeCompare(a.Sex)
                    )
                    $("#rowdata").html("")
                    for (var i = 0; i < data_array.length; i++) {
                        $("#rowdata").append(`<tr><td class="text-center">${data_array[i].id}</td>
                        <td class="text-center">${data_array[i].Age}</td>
                        <td class="text-center" style='font-size:18px;'><b>${data_array[i].Sex}</b></td>
                        <td class="text-center">${data_array[i].Job}</td>
                        <td class="text-center">${data_array[i].Housing}</td>
                        <td class="text-center">${data_array[i].Saving_accounts}</td>
                        <td class="text-center">${data_array[i].Checking_account}</td>
                        <td class="text-center">${data_array[i].Credit_amount}</td>
                        <td class="text-center">${data_array[i].Duration}</td>
                        <td class="text-center">${data_array[i].Purpose}</td>
                        </tr>`)
                    }
                    str.dataset.order = 'asec';
                    Pagination();
                }
            }
            if (header == 'Job') {
                var str = $('#job')[0];
                if (str.dataset.order == 'asec') {
                    var data_array = data['data'];
                    data_array.sort(function (a, b) {
                        return a.Job - b.Job;
                    })
                    $("#rowdata").html("")
                    for (var i = 0; i < data_array.length; i++) {
                        $("#rowdata").append(`<tr><td class="text-center">${data_array[i].id}</td>
                            <td class="text-center">${data_array[i].Age}</td>
                            <td class="text-center">${data_array[i].Sex}</td>
                            <td class="text-center"  style='font-size:18px;'><b>${data_array[i].Job}</b></td>
                            <td class="text-center">${data_array[i].Housing}</td>
                            <td class="text-center">${data_array[i].Saving_accounts}</td>
                            <td class="text-center">${data_array[i].Checking_account}</td>
                            <td class="text-center">${data_array[i].Credit_amount}</td>
                            <td class="text-center">${data_array[i].Duration}</td>
                            <td class="text-center">${data_array[i].Purpose}</td>
                            </tr>`)
                    }
                    str.dataset.order = 'desc';
                    Pagination();

                }
                else {
                    var data_array = data["data"];
                    data_array.sort(function (a, b) {
                        return b.Job - a.Job;
                    })
                    $("#rowdata").html("")
                    for (var i = 0; i < data_array.length; i++) {
                        $("#rowdata").append(`<tr><td class="text-center">${data_array[i].id}</td>
                            <td class="text-center" >${data_array[i].Age}</b></td>
                            <td class="text-center">${data_array[i].Sex}</td>
                            <td class="text-center"style='font-size:18px;'><b>${data_array[i].Job}</b></td>
                            <td class="text-center">${data_array[i].Housing}</td>
                            <td class="text-center">${data_array[i].Saving_accounts}</td>
                            <td class="text-center">${data_array[i].Checking_account}</td>
                            <td class="text-center">${data_array[i].Credit_amount}</td>
                            <td class="text-center">${data_array[i].Duration}</td>
                            <td class="text-center">${data_array[i].Purpose}</td>
                            </tr>`)
                    }
                    str.dataset.order = 'asec'
                    Pagination();
                }
            }
            if (header == 'Housing') {
                var str = $('#housing')[0];
                if (str.dataset.order == 'asec') {

                    var data_array = data['data'];
                    data_array.sort((a, b) =>
                        a.Housing.localeCompare(b.Housing)
                    )
                    $("#rowdata").html("")
                    for (var i = 0; i < data_array.length; i++) {
                        $("#rowdata").append(`<tr><td class="text-center">${data_array[i].id}</td>
                <td class="text-center">${data_array[i].Age}</td>
                <td class="text-center">${data_array[i].Sex}</td>
                <td class="text-center">${data_array[i].Job}</td>
                <td class="text-center"  style='font-size:18px;'><b>${data_array[i].Housing}</b></td>
                <td class="text-center">${data_array[i].Saving_accounts}</td>
                <td class="text-center">${data_array[i].Checking_account}</td>
                <td class="text-center">${data_array[i].Credit_amount}</td>
                <td class="text-center">${data_array[i].Duration}</td>
                <td class="text-center">${data_array[i].Purpose}</td>
                </tr>`)
                    }
                    str.dataset.order = 'desc'
                    Pagination();
                }
                else {
                    var data_array = data['data'];
                    data_array.sort((a, b) =>
                        b.Housing.localeCompare(a.Housing)
                    )
                    $("#rowdata").html("")
                    for (var i = 0; i < data_array.length; i++) {
                        $("#rowdata").append(`<tr><td class="text-center">${data_array[i].id}</td>
                <td class="text-center">${data_array[i].Age}</td>
                <td class="text-center">${data_array[i].Sex}</td>
                <td class="text-center">${data_array[i].Job}</td>
                <td class="text-center"  style='font-size:18px;'><b>${data_array[i].Housing}</b></td>
                <td class="text-center">${data_array[i].Saving_accounts}</td>
                <td class="text-center">${data_array[i].Checking_account}</td>
                <td class="text-center">${data_array[i].Credit_amount}</td>
                <td class="text-center">${data_array[i].Duration}</td>
                <td class="text-center">${data_array[i].Purpose}</td>
                </tr>`)
                    }
                    str.dataset.order = 'asec'
                    Pagination();
                }

            }
            if (header == 'Saving accounts') {

                var str = $('#savingaccounts')[0];
                if (str.dataset.order == 'asec') {
                    var data_array = data['data'];
                    data_array.sort((a, b) =>
                        a.Saving_accounts.localeCompare(b.Saving_accounts)
                    )
                    $("#rowdata").html("")
                    for (var i = 0; i < data_array.length; i++) {
                        $("#rowdata").append(`<tr><td class="text-center">${data_array[i].id}</td>
                <td class="text-center">${data_array[i].Age}</td>
                <td class="text-center">${data_array[i].Sex}</td>
                <td class="text-center">${data_array[i].Job}</td>
                <td class="text-center">${data_array[i].Housing}</td>
                <td class="text-center"  style='font-size:18px;'><b>${data_array[i].Saving_accounts}</b></td>
                <td class="text-center">${data_array[i].Checking_account}</td>
                <td class="text-center">${data_array[i].Credit_amount}</td>
                <td class="text-center">${data_array[i].Duration}</td>
                <td class="text-center">${data_array[i].Purpose}</td>
                </tr>`)
                    }
                    str.dataset.order = 'desc';
                    Pagination();
                }
                else {
                    var data_array = data['data'];
                    data_array.sort((a, b) =>
                        b.Saving_accounts.localeCompare(a.Saving_accounts)
                    )
                    $("#rowdata").html("")
                    for (var i = 0; i < data_array.length; i++) {
                        $("#rowdata").append(`<tr><td class="text-center">${data_array[i].id}</td>
                <td class="text-center">${data_array[i].Age}</td>
                <td class="text-center">${data_array[i].Sex}</td>
                <td class="text-center">${data_array[i].Job}</td>
                <td class="text-center">${data_array[i].Housing}</td>
                <td class="text-center"  style='font-size:18px;'><b>${data_array[i].Saving_accounts}</b></td>
                <td class="text-center">${data_array[i].Checking_account}</td>
                <td class="text-center">${data_array[i].Credit_amount}</td>
                <td class="text-center">${data_array[i].Duration}</td>
                <td class="text-center">${data_array[i].Purpose}</td>
                </tr>`)
                    }
                    str.dataset.order = 'asec';
                    Pagination()

                }

            }
            if (header == 'Checking account') {

                var str = $('#checkingaccount')[0];
                if(str.dataset.order=='asec'){ 
                var data_array = data['data'];
                data_array.sort((a, b) =>
                    a.Checking_account.localeCompare(b.Checking_account)
                )
                $("#rowdata").html("")
                for (var i = 0; i < data_array.length; i++) {
                    $("#rowdata").append(`<tr><td class="text-center">${data_array[i].id}</td>
                <td class="text-center">${data_array[i].Age}</td>
                <td class="text-center">${data_array[i].Sex}</td>
                <td class="text-center">${data_array[i].Job}</td>
                <td class="text-center">${data_array[i].Housing}</td>
                <td class="text-center">${data_array[i].Saving_accounts}</td>
                <td class="text-center"  style='font-size:18px;'><b>${data_array[i].Checking_account}</b></td>
                <td class="text-center">${data_array[i].Credit_amount}</td>
                <td class="text-center">${data_array[i].Duration}</td>
                <td class="text-center">${data_array[i].Purpose}</td>
                </tr>`)
                }
                str.dataset.order='desc';
                Pagination();
            }
            else{
                var data_array = data['data'];
                data_array.sort((a, b) =>
                    b.Checking_account.localeCompare(a.Checking_account)
                )
                $("#rowdata").html("")
                for (var i = 0; i < data_array.length; i++) {
                    $("#rowdata").append(`<tr><td class="text-center">${data_array[i].id}</td>
                <td class="text-center">${data_array[i].Age}</td>
                <td class="text-center">${data_array[i].Sex}</td>
                <td class="text-center">${data_array[i].Job}</td>
                <td class="text-center">${data_array[i].Housing}</td>
                <td class="text-center">${data_array[i].Saving_accounts}</td>
                <td class="text-center"  style='font-size:18px;'><b>${data_array[i].Checking_account}</b></td>
                <td class="text-center">${data_array[i].Credit_amount}</td>
                <td class="text-center">${data_array[i].Duration}</td>
                <td class="text-center">${data_array[i].Purpose}</td>
                </tr>`)
                }
                str.dataset.order='asec';
                Pagination();

            }
            }
            if (header == 'Credit amount') {

                var str = $('#creditamount')[0];
                if(str.dataset.order=='asec'){
                var data_array = data['data'];
                data_array.sort(function (a, b) {
                    return a.Credit_amount - b.Credit_amount
                })
                $("#rowdata").html("")
                for (var i = 0; i < data_array.length; i++) {
                    $("#rowdata").append(`<tr><td class="text-center">${data_array[i].id}</td>
                <td class="text-center">${data_array[i].Age}</td>
                <td class="text-center">${data_array[i].Sex}</td>
                <td class="text-center">${data_array[i].Job}</td>
                <td class="text-center">${data_array[i].Housing}</td>
                <td class="text-center">${data_array[i].Saving_accounts}</td>
                <td class="text-center">${data_array[i].Checking_account}</td>
                <td class="text-center"  style='font-size:18px;'><b>${data_array[i].Credit_amount}</b></td>
                <td class="text-center">${data_array[i].Duration}</td>
                <td class="text-center">${data_array[i].Purpose}</td>
                </tr>`)
                }
                str.dataset.order='desc';
                Pagination();
            }
            else{
                var data_array = data['data'];
                data_array.sort(function (a, b) {
                    return b.Credit_amount - a.Credit_amount
                })
                $("#rowdata").html("")
                for (var i = 0; i < data_array.length; i++) {
                    $("#rowdata").append(`<tr><td class="text-center">${data_array[i].id}</td>
                <td class="text-center">${data_array[i].Age}</td>
                <td class="text-center">${data_array[i].Sex}</td>
                <td class="text-center">${data_array[i].Job}</td>
                <td class="text-center">${data_array[i].Housing}</td>
                <td class="text-center">${data_array[i].Saving_accounts}</td>
                <td class="text-center">${data_array[i].Checking_account}</td>
                <td class="text-center"  style='font-size:18px;'><b>${data_array[i].Credit_amount}</b></td>
                <td class="text-center">${data_array[i].Duration}</td>
                <td class="text-center">${data_array[i].Purpose}</td>
                </tr>`)
                }
                str.dataset.order='asec';
                Pagination();

            }

            }
            if (header == 'Duration') {

                var str=$('#duration')[0];
                if(str.dataset.order=='asec'){
                var data_array = data['data'];
                data_array.sort(function (a, b) {
                    return a.Duration - b.Duration
                })
                $("#rowdata").html("")
                for (var i = 0; i < data_array.length; i++) {
                    $("#rowdata").append(`<tr><td class="text-center">${data_array[i].id}</td>
                <td class="text-center">${data_array[i].Age}</td>
                <td class="text-center">${data_array[i].Sex}</td>
                <td class="text-center">${data_array[i].Job}</td>
                <td class="text-center">${data_array[i].Housing}</td>
                <td class="text-center">${data_array[i].Saving_accounts}</td>
                <td class="text-center">${data_array[i].Checking_account}</td>
                <td class="text-center">${data_array[i].Credit_amount}</td>
                <td class="text-center"  style='font-size:18px;'><b>${data_array[i].Duration}</b></td>
                <td class="text-center">${data_array[i].Purpose}</td>
                </tr>`)
                }
                str.dataset.order='desc';
                Pagination();
            }
            else{
                var data_array = data['data'];
                data_array.sort(function (a, b) {
                    return b.Duration - a.Duration
                })
                $("#rowdata").html("")
                for (var i = 0; i < data_array.length; i++) {
                    $("#rowdata").append(`<tr><td class="text-center">${data_array[i].id}</td>
                <td class="text-center">${data_array[i].Age}</td>
                <td class="text-center">${data_array[i].Sex}</td>
                <td class="text-center">${data_array[i].Job}</td>
                <td class="text-center">${data_array[i].Housing}</td>
                <td class="text-center">${data_array[i].Saving_accounts}</td>
                <td class="text-center">${data_array[i].Checking_account}</td>
                <td class="text-center">${data_array[i].Credit_amount}</td>
                <td class="text-center"  style='font-size:18px;'><b>${data_array[i].Duration}</b></td>
                <td class="text-center">${data_array[i].Purpose}</td>
                </tr>`)
                }
                str.dataset.order='asec';
                Pagination();

            }

            }
            if (header == 'Purpose') {

                var str=$('#purpose')[0];
                if(str.dataset.order=='asec'){
                var data_array = data['data'];
                data_array.sort((a, b) =>
                    a.Purpose.localeCompare(b.Purpose)
                )
                $("#rowdata").html("")
                for (var i = 0; i < data_array.length; i++) {
                    $("#rowdata").append(`<tr><td class="text-center">${data_array[i].id}</td>
                <td class="text-center">${data_array[i].Age}</td>
                <td class="text-center">${data_array[i].Sex}</td>
                <td class="text-center">${data_array[i].Job}</td>
                <td class="text-center">${data_array[i].Housing}</td>
                <td class="text-center">${data_array[i].Saving_accounts}</td>
                <td class="text-center">${data_array[i].Checking_account}</td>
                <td class="text-center">${data_array[i].Credit_amount}</td>
                <td class="text-center">${data_array[i].Duration}</td>
                <td class="text-center"  style='font-size:18px;'><b>${data_array[i].Purpose}</b></td>
                </tr>`)
                }
                str.dataset.order='desc';
                Pagination();
                }
                else{
                    var data_array = data['data'];
                data_array.sort((a, b) =>
                    b.Purpose.localeCompare(a.Purpose)
                )
                $("#rowdata").html("")
                for (var i = 0; i < data_array.length; i++) {
                    $("#rowdata").append(`<tr><td class="text-center">${data_array[i].id}</td>
                <td class="text-center">${data_array[i].Age}</td>
                <td class="text-center">${data_array[i].Sex}</td>
                <td class="text-center">${data_array[i].Job}</td>
                <td class="text-center">${data_array[i].Housing}</td>
                <td class="text-center">${data_array[i].Saving_accounts}</td>
                <td class="text-center">${data_array[i].Checking_account}</td>
                <td class="text-center">${data_array[i].Credit_amount}</td>
                <td class="text-center">${data_array[i].Duration}</td>
                <td class="text-center"  style='font-size:18px;'><b>${data_array[i].Purpose}</b></td>
                </tr>`)
                }
                str.dataset.order='asec';
                Pagination();
                }
            }
        }
    })
});

function filter() {
    var val = $('#filterdata').val();
    $.ajax({
        url: '/datas/',
        type: 'GET',
        success: function (data) {
            if (val == 'Age') {
                $('#serching').keyup(function () {
                    agefilter();
                })
                function agefilter() {
                    var age = parseInt($('#serching').val());
                    var agelist = [];
                    var vals;

                    if (age != '') {
                        for (var i = 0; i < data.data.length; i++) {
                            vals = data.data[i]
                            if (age == vals.Age) {
                                agelist.push(vals);
                            }
                            else {
                                $('#validation').html("*****No data Found*****");
                                $('#validation').css('color', 'red');
                                $('#valnav').css('border', '3px solid red');
                                
                            }


                        }


                    }
                    if (isNaN(age)) {
                        $('#validation').html("*****Invalid Age*****");
                        $('#validation').css("color", "red");
                      
                       

                    }
                    if (agelist.length != 0) {
                        $('#validation').html("*****Data found successfully****");
                        $('#validation').css('color', 'green');
                        $('#valnav').css('border', '3px solid green');
                        $("#rowdata").html("")
                        var page = agelist.length / 10;
                        for (var i = 0; i < agelist.length; i++) {

                            $("#rowdata").append(`<tr><td class="text-center">${agelist[i].id}</td>
                                <td class="text-center" style='font-size:18px;'><b>${agelist[i].Age}</b></td>
                                <td class="text-center">${agelist[i].Sex}</td>
                                <td class="text-center">${agelist[i].Job}</td>
                                <td class="text-center">${agelist[i].Housing}</td>
                                <td class="text-center">${agelist[i].Saving_accounts}</td>
                                <td class="text-center">${agelist[i].Checking_account}</td>
                                <td class="text-center">${agelist[i].Credit_amount}</td>
                                <td class="text-center">${agelist[i].Duration}</td>
                                <td class="text-center"  >${agelist[i].Purpose}</td>
                                </tr>`)
                        }
                        $('#page').html("");
                        if (agelist.length > 10) {
                            var pagenum;
                            for (i = 0; i < page; i++) {
                                pagenum=i+1;
                                $('#page').append("<li class='page-item' id=" + i + ">" + "<a class='page-link' rel=" + i + ">" + pagenum + "</a></li>");
                            }

                            $('#page').html();
                            $('#rowdata tr').hide();
                            $('#rowdata tr').slice(0, 10).show();
                            $('#page li a:first').addClass('active');
                            $('#page li a').bind('click', function () {
                                $('#page li a').removeClass('active');
                                $(this).addClass('active');
                                var currPage = $(this).attr('rel');
                                var currentpage = parseInt(currPage);
                                var start = currentpage * 10;
                                var end = start + 10;
                                $('#rowdata tr').css('opacity', '0.0').hide().slice(start, end).
                                    css('display', 'table-row').animate({ opacity: 1 }, 300);
                            });
                        }

                    }
                }

            }
            if (val == 'Sex') {
                $('#serching').keyup(function () {
                    sexfilter();
                })
                function sexfilter() {
                    var sex = $('#serching').val();
                    var sexlist = [];
                    var vals;
                    if (sex.length >= 1) {
                        for (var i = 0; i < data.data.length; i++) {
                            vals = data.data[i]
                            if (sex == vals.Sex[0]) {
                                sexlist.push(vals);
                            }
                            else {
                                $('#validation').html("*****No data Found*****");
                                $('#validation').css('color', 'red');
                                $('#valnav').css('border', '3px solid red');
                                
                            }


                        }


                    }
                    if (sex != '') {
                        for (var i = 0; i < data.data.length; i++) {
                            vals = data.data[i]
                            if (sex == vals.Sex) {
                                sexlist.push(vals);
                            }
                            else {
                                $('#validation').html("*****No data Found*****");
                                $('#validation').css('color', 'red');
                                $('#valnav').css('border', '3px solid red');
                            }


                        }


                    }
                    if (!isNaN(sex)) {
                        $('#validation').html("*****Invalid input*****");
                        $('#validation').css("color", "red");
                        
                        
                    }
                    if (sexlist.length != 0) {
                        $('#validation').html("*****Data found successfully****");
                        $('#validation').css('color', 'green');
                        $('#valnav').css('border', '3px solid green');
                        $("#rowdata").html("")
                        var page = sexlist.length / 20;
                        for (var i = 0; i < sexlist.length; i++) {

                            $("#rowdata").append(`<tr><td class="text-center">${sexlist[i].id}</td>
                                <td class="text-center" >${sexlist[i].Age}</td>
                                <td class="text-center"style='font-size:18px;'><b>${sexlist[i].Sex}</b></td>
                                <td class="text-center">${sexlist[i].Job}</td>
                                <td class="text-center">${sexlist[i].Housing}</td>
                                <td class="text-center">${sexlist[i].Saving_accounts}</td>
                                <td class="text-center">${sexlist[i].Checking_account}</td>
                                <td class="text-center">${sexlist[i].Credit_amount}</td>
                                <td class="text-center">${sexlist[i].Duration}</td>
                                <td class="text-center"  >${sexlist[i].Purpose}</td>
                                </tr>`)
                        }
                        $('#page').html("");
                        if (sexlist.length > 20) {
                            var pagenum;
                            for (i = 0; i < page; i++) {
                                pagenum=i+1;
                                $('#page').append("<li class='page-item' id=" + i + ">" + "<a class='page-link' rel=" + i + ">" + pagenum + "</a></li>");
                            }

                            $('#page').html();
                            $('#rowdata tr').hide();
                            $('#rowdata tr').slice(0, 20).show();
                            $('#page li a:first').addClass('active');
                            $('#page li a').bind('click', function () {
                                $('#page li a').removeClass('active');
                                $(this).addClass('active');
                                var currPage = $(this).attr('rel');
                                var currentpage = parseInt(currPage);
                                var start = currentpage * 20;
                                var end = start + 20;
                                $('#rowdata tr').css('opacity', '0.0').hide().slice(start, end).
                                    css('display', 'table-row').animate({ opacity: 1 }, 300);
                            });
                        }

                    }
                }


            }
            if (val == 'Job') {
                $('#serching').keyup(function () {
                    jobfilter();
                })
                function jobfilter() {
                    var job = parseInt($('#serching').val());
                    var joblist = [];
                    var vals;

                    if (job != '') {
                        for (var i = 0; i < data.data.length; i++) {
                            vals = data.data[i]
                            if (job == vals.Job) {
                                joblist.push(vals);
                            }
                            else {
                                $('#validation').html("*****No data Found*****");
                                $('#validation').css('color', 'red');
                                $('#valnav').css('border', '3px solid red');
                                
                            }


                        }


                    }
                    if (isNaN(job)) {
                        $('#validation').html("*****Invalid Job*****");
                        $('#validation').css("color", "red");
                        

                    }
                    if (joblist.length != 0) {
                        $('#validation').html("*****Data found successfully****");
                        $('#validation').css('color', 'green');
                        $('#valnav').css('border', '3px solid green');
                        $("#rowdata").html("")
                        var page = joblist.length / 20;
                        for (var i = 0; i < joblist.length; i++) {

                            $("#rowdata").append(`<tr><td class="text-center">${joblist[i].id}</td>
                                <td class="text-center" >${joblist[i].Age}</td>
                                <td class="text-center">${joblist[i].Sex}</td>
                                <td class="text-center"style='font-size:18px;'><b>${joblist[i].Job}</b></td>
                                <td class="text-center">${joblist[i].Housing}</td>
                                <td class="text-center">${joblist[i].Saving_accounts}</td>
                                <td class="text-center">${joblist[i].Checking_account}</td>
                                <td class="text-center">${joblist[i].Credit_amount}</td>
                                <td class="text-center">${joblist[i].Duration}</td>
                                <td class="text-center"  >${joblist[i].Purpose}</td>
                                </tr>`)
                        }
                        $('#page').html("");
                        if (joblist.length > 20) {
                            var pagenum;
                            for (i = 0; i < page; i++) {
                                pagenum=i+1;
                                $('#page').append("<li class='page-item' id=" + i + ">" + "<a class='page-link' rel=" + i + ">" + pagenum + "</a></li>");
                            }

                            $('#page').html();
                            $('#rowdata tr').hide();
                            $('#rowdata tr').slice(0, 20).show();
                            $('#page li a:first').addClass('active');
                            $('#page li a').bind('click', function () {
                                $('#page li a').removeClass('active');
                                $(this).addClass('active');
                                var currPage = $(this).attr('rel');
                                var currentpage = parseInt(currPage);
                                var start = currentpage * 20;
                                var end = start + 20;
                                $('#rowdata tr').css('opacity', '0.0').hide().slice(start, end).
                                    css('display', 'table-row').animate({ opacity: 1 }, 300);
                            });
                        }

                    }
                }

            }
            if (val == 'Housing') {
                $('#serching').keyup(function () {
                    Housingfilter();
                })
                function Housingfilter() {
                    var Housing = $('#serching').val();
                    var Housinglist = [];
                    var vals;
                    if (Housing.length >= 1) {
                        for (var i = 0; i < data.data.length; i++) {
                            vals = data.data[i]
                            if (Housing == vals.Housing[0]) {
                                Housinglist.push(vals);
                            }
                            else {
                                $('#validation').html("*****No data Found*****");
                                $('#validation').css('color', 'red');
                                $('#valnav').css('border', '3px solid red');
                              
                            }


                        }


                    }
                    if (Housing != '') {
                        for (var i = 0; i < data.data.length; i++) {
                            vals = data.data[i]
                            if (Housing == vals.Housing) {
                                Housinglist.push(vals);
                            }
                            else {
                                $('#validation').html("*****No data Found*****");
                                $('#validation').css('color', 'red');
                                $('#valnav').css('border', '3px solid red');
                                
                            }


                        }


                    }
                    if (!isNaN(Housing)) {
                        $('#validation').html("*****Invalid input*****");
                        $('#validation').css("color", "red");
                        
                    }
                    if (Housinglist.length != 0) {
                        $('#validation').html("*****Data found successfully****");
                        $('#validation').css('color', 'green');
                        $('#valnav').css('border', '3px solid green');
                        $("#rowdata").html("")
                        var page = Housinglist.length / 20;
                        for (var i = 0; i < Housinglist.length; i++) {

                            $("#rowdata").append(`<tr><td class="text-center">${Housinglist[i].id}</td>
                                <td class="text-center" >${Housinglist[i].Age}</td>
                                <td class="text-center">${Housinglist[i].Sex}</td>
                                <td class="text-center">${Housinglist[i].Job}</td>
                                <td class="text-center"style='font-size:18px;'><b>${Housinglist[i].Housing}</b></td>
                                <td class="text-center">${Housinglist[i].Saving_accounts}</td>
                                <td class="text-center">${Housinglist[i].Checking_account}</td>
                                <td class="text-center">${Housinglist[i].Credit_amount}</td>
                                <td class="text-center">${Housinglist[i].Duration}</td>
                                <td class="text-center"  >${Housinglist[i].Purpose}</td>
                                </tr>`)
                        }
                        $('#page').html("");
                        if (Housinglist.length > 20) {
                            var pagenum;
                            for (i = 0; i < page; i++) {
                                pagenum=i+1;
                                $('#page').append("<li class='page-item' id=" + i + ">" + "<a class='page-link' rel=" + i + ">" + pagenum + "</a></li>");
                            }

                            $('#page').html();
                            $('#rowdata tr').hide();
                            $('#rowdata tr').slice(0, 20).show();
                            $('#page li a:first').addClass('active');
                            $('#page li a').bind('click', function () {
                                $('#page li a').removeClass('active');
                                $(this).addClass('active');
                                var currPage = $(this).attr('rel');
                                var currentpage = parseInt(currPage);
                                var start = currentpage * 20;
                                var end = start + 20;
                                $('#rowdata tr').css('opacity', '0.0').hide().slice(start, end).
                                    css('display', 'table-row').animate({ opacity: 1 }, 300);
                            });
                        }

                    }
                }


            }
            if (val == 'Saving accounts') {
                $('#serching').keyup(function () {
                    Saving_accountsfilter();
                })
                function Saving_accountsfilter() {
                    var Saving_accounts = $('#serching').val();
                    var Saving_accountslist = [];
                    var vals;
                    if (Saving_accounts.length >= 1) {
                        for (var i = 0; i < data.data.length; i++) {
                            vals = data.data[i]
                            if (Saving_accounts == vals.Saving_accounts[0]) {
                                Saving_accountslist.push(vals);
                            }
                            else {
                                $('#validation').html("*****No data Found*****");
                                $('#validation').css('color', 'red');
                                $('#valnav').css('border', '3px solid red');
                              
                            }


                        }


                    }
                    if (Saving_accounts != '') {
                        for (var i = 0; i < data.data.length; i++) {
                            vals = data.data[i]
                            if (Saving_accounts == vals.Saving_accounts) {
                                Saving_accountslist.push(vals);
                            }
                            else {
                                $('#validation').html("*****No data Found*****");
                                $('#validation').css('color', 'red');
                                $('#valnav').css('border', '3px solid red');
                             
                            }


                        }


                    }
                    if (!isNaN(Saving_accounts)) {
                        $('#validation').html("*****Invalid input*****");
                        $('#validation').css("color", "red");
                        

                    }
                    if (Saving_accountslist.length != 0) {
                        $('#validation').html("*****Data found successfully****");
                        $('#validation').css('color', 'green');
                        $('#valnav').css('border', '3px solid green');
                        $("#rowdata").html("")
                        var page = Saving_accountslist.length / 20;
                        for (var i = 0; i < Saving_accountslist.length; i++) {

                            $("#rowdata").append(`<tr><td class="text-center">${Saving_accountslist[i].id}</td>
                                <td class="text-center" >${Saving_accountslist[i].Age}</td>
                                <td class="text-center">${Saving_accountslist[i].Sex}</td>
                                <td class="text-center">${Saving_accountslist[i].Job}</td>
                                <td class="text-center">${Saving_accountslist[i].Housing}</td>
                                <td class="text-center"style='font-size:18px;'><b>${Saving_accountslist[i].Saving_accounts}</b></td>
                                <td class="text-center">${Saving_accountslist[i].Checking_account}</td>
                                <td class="text-center">${Saving_accountslist[i].Credit_amount}</td>
                                <td class="text-center">${Saving_accountslist[i].Duration}</td>
                                <td class="text-center"  >${Saving_accountslist[i].Purpose}</td>
                                </tr>`)
                        }
                        $('#page').html("");
                        if (Saving_accountslist.length > 20) {
                            var pagenum;
                            for (i = 0; i < page; i++) {
                                pagenum=i+1;
                                $('#page').append("<li class='page-item' id=" + i + ">" + "<a class='page-link' rel=" + i + ">" + pagenum + "</a></li>");
                            }

                            $('#page').html();
                            $('#rowdata tr').hide();
                            $('#rowdata tr').slice(0, 20).show();
                            $('#page li a:first').addClass('active');
                            $('#page li a').bind('click', function () {
                                $('#page li a').removeClass('active');
                                $(this).addClass('active');
                                var currPage = $(this).attr('rel');
                                var currentpage = parseInt(currPage);
                                var start = currentpage * 20;
                                var end = start + 20;
                                $('#rowdata tr').css('opacity', '0.0').hide().slice(start, end).
                                    css('display', 'table-row').animate({ opacity: 1 }, 300);
                            });
                        }

                    }
                }


            }
            if (val == 'Checking account') {
                $('#serching').keyup(function () {
                    Checking_accountfilter();
                })
                function Checking_accountfilter() {
                    var Checking_account = $('#serching').val();
                    var Checking_accountlist = [];
                    var vals;
                    if (Checking_account.length >= 1) {
                        for (var i = 0; i < data.data.length; i++) {
                            vals = data.data[i]
                            if (Checking_account == vals.Checking_account[0]) {
                                Checking_accountlist.push(vals);
                            }
                            else {
                                $('#validation').html("*****No data Found*****");
                                $('#validation').css('color', 'red');
                                $('#valnav').css('border', '3px solid red');
                            }


                        }


                    }
                    if (Checking_account != '') {
                        for (var i = 0; i < data.data.length; i++) {
                            vals = data.data[i]
                            if (Checking_account == vals.Checking_account) {
                                Checking_accountlist.push(vals);
                            }
                            else {
                                $('#validation').html("*****No data Found*****");
                                $('#validation').css('color', 'red');
                                $('#valnav').css('border', '3px solid red');
                            }


                        }


                    }
                    if (!isNaN(Checking_account)) {
                        $('#validation').html("*****Invalid input*****");
                        $('#validation').css("color", "red");
                        

                    }
                    if (Checking_accountlist.length != 0) {
                        $('#validation').html("*****Data found successfully****");
                        $('#validation').css('color', 'green');
                        $('#valnav').css('border', '3px solid green');
                        $("#rowdata").html("")
                        var page = Checking_accountlist.length / 20;
                        for (var i = 0; i < Checking_accountlist.length; i++) {

                            $("#rowdata").append(`<tr><td class="text-center">${Checking_accountlist[i].id}</td>
                                <td class="text-center" >${Checking_accountlist[i].Age}</td>
                                <td class="text-center">${Checking_accountlist[i].Sex}</td>
                                <td class="text-center">${Checking_accountlist[i].Job}</td>
                                <td class="text-center">${Checking_accountlist[i].Housing}</td>
                                <td class="text-center">${Checking_accountlist[i].Saving_accounts}</td>
                                <td class="text-center"style='font-size:18px;'><b>${Checking_accountlist[i].Checking_account}</b></td>
                                <td class="text-center">${Checking_accountlist[i].Credit_amount}</td>
                                <td class="text-center">${Checking_accountlist[i].Duration}</td>
                                <td class="text-center"  >${Checking_accountlist[i].Purpose}</td>
                                </tr>`)
                        }
                        $('#page').html("");
                        if (Checking_accountlist.length > 20) {
                            var pagenum;
                            for (i = 0; i < page; i++) {
                                pagenum=i+1;
                                $('#page').append("<li class='page-item' id=" + i + ">" + "<a class='page-link' rel=" + i + ">" + pagenum + "</a></li>");
                            }

                            $('#page').html();
                            $('#rowdata tr').hide();
                            $('#rowdata tr').slice(0, 20).show();
                            $('#page li a:first').addClass('active');
                            $('#page li a').bind('click', function () {
                                $('#page li a').removeClass('active');
                                $(this).addClass('active');
                                var currPage = $(this).attr('rel');
                                var currentpage = parseInt(currPage);
                                var start = currentpage * 20;
                                var end = start + 20;
                                $('#rowdata tr').css('opacity', '0.0').hide().slice(start, end).
                                    css('display', 'table-row').animate({ opacity: 1 }, 300);
                            });
                        }

                    }
                }


            }
            if (val == 'Credit amount') {
                $('#serching').keyup(function () {
                    Credit_amountfilter();
                })
                function Credit_amountfilter() {
                    var Credit_amount = parseInt($('#serching').val());
                    var Credit_amountlist = [];
                    var vals;

                    if (Credit_amount != '') {

                        for (var i = 0; i < data.data.length; i++) {
                            vals = data.data[i]
                            if (Credit_amount == vals.Credit_amount) {
                                Credit_amountlist.push(vals);
                            }
                            else {
                                $('#validation').html("*****No data Found*****");
                                $('#validation').css('color', 'red');
                                $('#valnav').css('border', '3px solid red');
                            }


                        }


                    }
                    if (isNaN(Credit_amount)) {
                        $('#validation').html("*****Invalid input*****");
                        $('#validation').css("color", "red");
                        

                    }
                    if (Credit_amountlist.length != 0) {
                        $('#validation').html("*****Data found successfully****");
                        $('#validation').css('color', 'green');
                        $('#valnav').css('border', '3px solid green');
                        $("#rowdata").html("")
                        var page = Credit_amountlist.length / 10;
                        for (var i = 0; i < Credit_amountlist.length; i++) {

                            $("#rowdata").append(`<tr><td class="text-center">${Credit_amountlist[i].id}</td>
                                <td class="text-center" >${Credit_amountlist[i].Age}</td>
                                <td class="text-center">${Credit_amountlist[i].Sex}</td>
                                <td class="text-center">${Credit_amountlist[i].Job}</td>
                                <td class="text-center">${Credit_amountlist[i].Housing}</td>
                                <td class="text-center">${Credit_amountlist[i].Saving_accounts}</td>
                                <td class="text-center">${Credit_amountlist[i].Checking_account}</td>
                                <td class="text-center"style='font-size:18px;'><b>${Credit_amountlist[i].Credit_amount}</b></td>
                                <td class="text-center">${Credit_amountlist[i].Duration}</td>
                                <td class="text-center"  >${Credit_amountlist[i].Purpose}</td>
                                </tr>`)
                        }
                        $('#page').html("");
                        if (Credit_amountlist.length > 10) {
                            var pagenum;
                            for (i = 0; i < page; i++) {
                                pagenum=i+1;
                                $('#page').append("<li class='page-item' id=" + i + ">" + "<a class='page-link' rel=" + i + ">" + pagenum + "</a></li>");
                            }

                            $('#page').html();
                            $('#rowdata tr').hide();
                            $('#rowdata tr').slice(0, 10).show();
                            $('#page li a:first').addClass('active');
                            $('#page li a').bind('click', function () {
                                $('#page li a').removeClass('active');
                                $(this).addClass('active');
                                var currPage = $(this).attr('rel');
                                var currentpage = parseInt(currPage);
                                var start = currentpage * 10;
                                var end = start + 10;
                                $('#rowdata tr').css('opacity', '0.0').hide().slice(start, end).
                                    css('display', 'table-row').animate({ opacity: 1 }, 300);
                            });
                        }

                    }
                }

            }
            if (val == 'Duration') {
                $('#serching').keyup(function () {
                    Durationfilter();
                })
                function Durationfilter() {
                    var Duration = parseInt($('#serching').val());
                    var Durationlist = [];
                    var vals;

                    if (Duration != '') {
                        for (var i = 0; i < data.data.length; i++) {
                            vals = data.data[i]
                            if (Duration == vals.Duration) {
                                Durationlist.push(vals);
                            }
                            else {
                                $('#validation').html("*****No data Found*****");
                                $('#validation').css('color', 'red');
                                $('#valnav').css('border', '3px solid red');
                            }


                        }


                    }
                    if (isNaN(Duration)) {
                        $('#validation').html("*****Invalid Duration*****");
                        $('#validation').css("color", "red");
                        
                    }
                    if (Durationlist.length != 0) {
                        $('#validation').html("*****Data found successfully****");
                        $('#validation').css('color', 'green');
                        $('#valnav').css('border', '3px solid green');
                        $("#rowdata").html("")
                        var page = Durationlist.length / 10;
                        for (var i = 0; i < Durationlist.length; i++) {

                            $("#rowdata").append(`<tr><td class="text-center">${Durationlist[i].id}</td>
                                <td class="text-center" >${Durationlist[i].Age}</td>
                                <td class="text-center">${Durationlist[i].Sex}</td>
                                <td class="text-center">${Durationlist[i].Job}</td>
                                <td class="text-center">${Durationlist[i].Housing}</td>
                                <td class="text-center">${Durationlist[i].Saving_accounts}</td>
                                <td class="text-center">${Durationlist[i].Checking_account}</td>
                                <td class="text-center">${Durationlist[i].Credit_amount}</td>
                                <td class="text-center"style='font-size:18px;'><b>${Durationlist[i].Duration}</b></td>
                                <td class="text-center"  >${Durationlist[i].Purpose}</td>
                                </tr>`)
                        }
                        $('#page').html("");
                        if (Durationlist.length > 10) {
                            var pagenum;
                            for (i = 0; i < page; i++) {
                                pagenum=i+1;
                                $('#page').append("<li class='page-item' id=" + i + ">" + "<a class='page-link' rel=" + i + ">" + pagenum + "</a></li>");
                            }

                            $('#page').html();
                            $('#rowdata tr').hide();
                            $('#rowdata tr').slice(0, 10).show();
                            $('#page li a:first').addClass('active');
                            $('#page li a').bind('click', function () {
                                $('#page li a').removeClass('active');
                                $(this).addClass('active');
                                var currPage = $(this).attr('rel');
                                var currentpage = parseInt(currPage);
                                var start = currentpage * 10;
                                var end = start + 10;
                                $('#rowdata tr').css('opacity', '0.0').hide().slice(start, end).
                                    css('display', 'table-row').animate({ opacity: 1 }, 300);
                            });
                        }

                    }
                }

            }
            if (val == 'Purpose') {
                $('#serching').keyup(function () {
                    Purposefilter();
                })
                function Purposefilter() {
                    var Purpose = $('#serching').val();
                    var Purposelist = [];
                    var vals;
                    if (Purpose[0].length != 0) {
                        for (var i = 0; i < data.data.length; i++) {
                            vals = data.data[i]
                            if (Purpose == vals.Purpose[0]) {
                                Purposelist.push(vals);
                            }
                            else {
                                $('#validation').html("*****No data Found*****");
                                $('#validation').css('color', 'red');
                                $('#valnav').css('border', '3px solid red');
                            }


                        }


                    }
                    if (!isNaN(Purpose)) {
                        $('#validation').html("*****Invalid input*****");
                        $('#validation').css("color", "red");
                        

                    }
                    if (Purposelist.length != 0) {
                        $('#validation').html("*****Data found successfully****");
                        $('#validation').css('color', 'green');
                        $('#valnav').css('border', '3px solid green');
                        $("#rowdata").html("")
                        var page = Purposelist.length / 20;
                        for (var i = 0; i < Purposelist.length; i++) {

                            $("#rowdata").append(`<tr><td class="text-center">${Purposelist[i].id}</td>
                                <td class="text-center" >${Purposelist[i].Age}</td>
                                <td class="text-center">${Purposelist[i].Sex}</td>
                                <td class="text-center">${Purposelist[i].Job}</td>
                                <td class="text-center">${Purposelist[i].Housing}</td>
                                <td class="text-center">${Purposelist[i].Saving_accounts}</td>
                                <td class="text-center">${Purposelist[i].Checking_account}</td>
                                <td class="text-center">${Purposelist[i].Credit_amount}</td>
                                <td class="text-center">${Purposelist[i].Duration}</td>
                                <td class="text-center"style='font-size:18px;'><b>${Purposelist[i].Purpose}</b></td>
                                </tr>`)
                        }
                        $('#page').html("");
                        if (Purposelist.length > 20) {
                            var pagenum;
                            for (i = 0; i < page; i++) {
                                pagenum=i+1;
                                $('#page').append("<li class='page-item' id=" + i + ">" + "<a class='page-link' rel=" + i + ">" + pagenum + "</a></li>");
                            }

                            $('#page').html();
                            $('#rowdata tr').hide();
                            $('#rowdata tr').slice(0, 20).show();
                            $('#page li a:first').addClass('active');
                            $('#page li a').bind('click', function () {
                                $('#page li a').removeClass('active');
                                $(this).addClass('active');
                                var currPage = $(this).attr('rel');
                                var currentpage = parseInt(currPage);
                                var start = currentpage * 20;
                                var end = start + 20;
                                $('#rowdata tr').css('opacity', '0.0').hide().slice(start, end).
                                    css('display', 'table-row').animate({ opacity: 1 }, 300);
                            });
                        }

                    }
                }


            }

        }
    })
}


