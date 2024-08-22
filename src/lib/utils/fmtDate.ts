export default function fmtDate(date:Date) {
    const out = date.toISOString().slice(0, 10) || "no date";
    return out
}