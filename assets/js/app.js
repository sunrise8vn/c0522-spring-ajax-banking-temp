class App {

    static DOMAIN_API = "http://localhost:8089";

    static BASE_URL_CUSTOMER = this.DOMAIN_API + "/api/customers";

    static AlertMessageEn = class {
        static SUCCESS_CREATED = "Successful data generation !";
        static SUCCESS_UPDATED = "Data update successful !";
        static SUCCESS_DEPOSIT = "Deposit transaction successful !";
        static SUCCESS_WITHDRAW = "Withdrawal transaction successful !";
        static SUCCESS_TRANSFER = "Transfer transaction successful !";
        static SUCCESS_DEACTIVATE = "Deactivate the customer successfully !";

        static ERROR_400 = "The operation failed, please check the data again.";
        static ERROR_401 = "Unauthorized - Your access token has expired or is not valid.";
        static ERROR_403 = "Forbidden - You are not authorized to access this resource.";
        static ERROR_404 = "Not Found - The resource has been removed or does not exist";
        static ERROR_500 = "Internal Server Error - The server system is having problems or cannot be accessed.";

        static ERROR_LOADING_PROVINCE = "Loading list of provinces - cities failed !";
        static ERROR_LOADING_DISTRICT = "Loading list of district - ward failed !"
        static ERROR_LOADING_WARD = "Loading list of wards - communes - towns failed !";
    }

    static AlertMessageVi = class {
        static SUCCESS_CREATED = "Tạo dữ liệu thành công !";
        static SUCCESS_UPDATED = "Cập nhật dữ liệu thành công !";
        static SUCCESS_DEPOSIT = "Giao dịch gửi tiền thành công !";
        static SUCCESS_WITHDRAW = "Giao dịch rút tiền thành công !";
        static SUCCESS_TRANSFER = "Giao dịch chuyển khoản thành công !";
        static SUCCESS_DEACTIVATE = "Hủy kích hoạt khách hàng thành công !";

        static ERROR_400 = "Thao tác không thành công, vui lòng kiểm tra lại dữ liệu.";
        static ERROR_401 = "Unauthorized - Access Token của bạn hết hạn hoặc không hợp lệ.";
        static ERROR_403 = "Forbidden - Bạn không được quyền truy cập tài nguyên này.";
        static ERROR_404 = "Not Found - Tài nguyên này đã bị xóa hoặc không tồn tại";
        static ERROR_500 = "Internal Server Error - Hệ thống Server đang có vấn đề hoặc không truy cập được.";

        static ERROR_LOADING_PROVINCE = "Tải danh sách tỉnh - thành phố không thành công !";
        static ERROR_LOADING_DISTRICT = "Tải danh sách quận - phường - huyện không thành công !";
        static ERROR_LOADING_WARD = "Tải danh sách phường - xã - thị trấn không thành công !";
    }

    static SweetAlert = class {

        static showAlertSuccess(t) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: t,
                showConfirmButton: false,
                timer: 1500
            })
        }

        static showAlertError(t) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: t,
                showConfirmButton: true
            })
        }
    }

    static renderRowCustomer(obj) {
        let str = `
            <tr id="tr_${obj.id}">
                <td>${obj.id}</td>
                <td>${obj.fullName}</td>
                <td>${obj.email}</td>
                <td class="text-center">${obj.phone}</td>
                <td>${obj.address}</td>
                <td class="text-end num-space">${obj.balance}</td>
                <td class="text-center">
                    <a class="btn btn-outline-secondary edit" data-id="${obj.id}" title="" data-toggle="tooltip"  data-bs-original-title="Edit">
                        <i class="fas fa-edit"></i>
                    </a>
                </td>
                <td class="text-center">
                    <a class="btn btn-outline-success deposit" data-id="${obj.id}" title="" data-toggle="tooltip" data-bs-original-title="Deposit">
                        <i class="fas fa-plus"></i>
                    </a>
                </td>
                <td class="text-center">
                    <a class="btn btn-outline-warning withdraw" data-id="${obj.id}" title="" data-toggle="tooltip" data-bs-original-title="Withdraw">
                        <i class="fas fa-minus"></i>
                    </a>
                </td>
                <td class="text-center">
                    <a class="btn btn-outline-primary transfer" data-id="${obj.id}" title="" data-toggle="tooltip" data-bs-original-title="Transfer">
                        <i class="fas fa-exchange-alt"></i>
                    </a>
                </td>
                <td class="text-center">
                    <a class="btn btn-outline-danger delete" data-id="${obj.id}" title="" data-toggle="tooltip" data-bs-original-title="Suspended">
                        <i class="fas fa-trash-alt"></i>
                    </a>
                </td>
            </tr>
        `;

        return str;
    }
}


class Customer {
    constructor(id, fullName, email, phone, address, balance) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.balance = balance;
    }
}

class Withdraw {
    constructor(id, customerId, transactionAmount) {
        this.id = id;
        this.customerId =customerId;
        this.transactionAmount = transactionAmount;
    }
}