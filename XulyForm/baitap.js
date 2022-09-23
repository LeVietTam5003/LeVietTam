$(document).ready(function() {
    $("form").submit(function(event) {
        var getName = $("input.hoTen").val().trim()
        var getEmail = $("input.email").val().trim()
        var getPhoneNumber = $("input.soDienThoai").val().trim()
        var getAddress = $("input.Diachi").val().trim()
        var getHeadline = $("input.tieuDe").val().trim()
        var getContent = $("textarea.noiDung").val().trim()

        var exist = 1

        if (getName == "") {
            $("p.check1").text("Bạn chưa nhập vào")
            exist = 2
        } else {
            $("p.check1").text("")
        }

        if (getEmail == "") {
            $("p.check2").text("Bạn chưa nhập vào")
            exist = 2
        } else {
            $("p.check2").text("")
        }

        if (getEmail == "") {
            $("p.check2").text("Bạn chưa nhập vào")
            exist = 2
        } else {
            $("p.check2").text("")
        }
        if (getPhoneNumber == "") {
            $("p.check3").text("Bạn chưa nhập vào")
            exist = 2
        } else {
            $("p.check3").text("")
        }
        if (getAddress == "") {
            $("p.check4").text("Bạn chưa nhập vào")
            exist = 2
        } else {
            $("p.check4").text("")
        }

        if (getHeadline == "") {
            $("p.check5").text("Bạn chưa nhập vào")
            exist = 2
        } else {
            $("p.check5").text("")
        }

        if (getContent == "") {
            $("p.check6").text("Bạn chưa nhập vào")
            exist = 2
        } else {
            $("p.check6").text("")

        }
        if (exist == 1) {
            return true;
        }
        // dung tam thoi
        // Ban đầu chưa có gì hết thì cho nó dừng tạm thời

        return false;

    })

})