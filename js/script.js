document.addEventListener("DOMContentLoaded", function () {
    const offices = document.querySelectorAll(".phone-directory__office");

    offices.forEach((office) => {
        office.addEventListener("click", function () {
            this.classList.toggle("open");
            const data = this.nextElementSibling;
            if (data && data.classList.contains("phone-directory__data")) {
                data.classList.toggle("open");
            }
        });
    });

    // function filterOfficeEntries(inputElement) {
    //     const searchTerm = inputElement.value.toLowerCase();
    //     const offices = document.querySelectorAll('tbody.phone-directory__office');
        
    //     offices.forEach(office => {
    //         if (office.classList.contains('phone-directory__office')) {
    //             if (!office.querySelector('.office-name').textContent.toLowerCase().includes(searchTerm)) {
    //                 office.style.display = 'none';
    //             } else {
    //                 office.style.display = 'table-row-group';
    //             }
    //         } else {
    //             office.style.display = office.closest('tbody.phone-directory__office').style.display !== 'none' ? 'table-row-group' : 'none';
    //         }
    //     });
    // }

    // function filterСharacteristicPhones(inputElement) {
    //     const searchTerm = inputElement.value.toLowerCase();
    //     const characteristics = document.querySelectorAll('tbody.phone-directory__data');
        
    //     characteristics.forEach(characteristic => {
    //         if (characteristic.classList.contains('phone-directory__data')) {
    //             if (!characteristic.querySelector('.characteristic-phone-number').textContent.toLowerCase().includes(searchTerm)) {
    //                 characteristic.style.display = 'none';
    //             } else {
    //                 characteristic.style.display = 'table-row-group';
    //             }
    //         } else {
    //             characteristic.style.display = characteristic.closest('tbody.phone-directory__data').style.display !== 'none' ? 'table-row-group' : 'none';
    //         }
    //     });
    // }

    // document.querySelector('#input-office').addEventListener('input', function() {
    //     filterOfficeEntries(this);
    // });

    // document.querySelector('#input-characteristic-phone-number').addEventListener('input', function() {
    //     filterСharacteristicPhones(this);
    // });
});
