export default function fmtDate(date:Date) {
    date.toISOString().slice(0, 10) || "no date";
}