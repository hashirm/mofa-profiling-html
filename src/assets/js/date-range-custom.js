
const currentLang="en";

var DateRangeTxt = (currentLang === "ar") ? "نطاق مخصص" : "Custom Range";

var localeSettings = {
    "en": {
        applyLabel: "Done",
        cancelLabel: "Clear",
        customRangeLabel: DateRangeTxt,
        daysOfWeek: moment.weekdaysMin(),
        monthNames: moment.months(),
        ranges: {
            'Any Time': [moment().subtract(10, 'years'), moment()],
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    },
    "ar": {
        applyLabel: "تأكيد",
        cancelLabel: "إلغاء",
        customRangeLabel: DateRangeTxt,
        daysOfWeek: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
        monthNames: [
            "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
            "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
        ],
        ranges: {
            'في أي وقت': [moment().subtract(10, 'years'), moment()],
            'اليوم': [moment(), moment()],
            'أمس': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'آخر 7 أيام': [moment().subtract(6, 'days'), moment()],
            'آخر 30 يومًا': [moment().subtract(29, 'days'), moment()],
            'هذا الشهر': [moment().startOf('month'), moment().endOf('month')],
            'الشهر الماضي': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }
};

// Date range 
$(function () {
    // ✅ Default to "Any Time"
    var start = moment().subtract(10, 'years');
    var end = moment();

    function cb(start, end) {
        let rangeText;

        // ✅ Check if the range is exactly "Any Time"
        if (start.isSame(moment().subtract(10, 'years'), 'day') && end.isSame(moment(), 'day')) {
            rangeText = (currentLang === "ar") ? "في أي وقت" : "Any Time";
        } else {
            rangeText = start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY');
        }

        $('.ran span').html(rangeText);
    }

    $('.ran').daterangepicker({
        startDate: start,
        endDate: end,
        autoUpdateInput: false,
        ranges: localeSettings[currentLang].ranges,
        locale: {
            ...localeSettings[currentLang]
        }
    }, cb);

    cb(start, end); // Set initial display
});
