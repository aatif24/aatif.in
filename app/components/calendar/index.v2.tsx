'use client';

import { getCalApi } from "@calcom/embed-react";
import { useEffect, useRef } from "react";
export default function CalendarV2({ open }: { open: boolean }) {

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({});
            cal("ui", { "styles": { "branding": { "brandColor": "#000000" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])

    const btnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (open) {
            console.log("open", btnRef.current)
            btnRef.current?.click()
        }
    }, [open])

    return <button
        ref={btnRef}
        data-cal-namespace=""
        data-cal-link="aatif24/30min"
        data-cal-config='{"layout":"month_view"}'
    >Click me</button>;
};
