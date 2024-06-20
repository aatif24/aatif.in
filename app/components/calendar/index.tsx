
'use client';

import Image from 'next/image';
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { cn } from '@/lib/utils';


export default function Calendar({ className }: { className?: string }) {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({});
            cal("ui", { "styles": { "branding": { "brandColor": "#000000" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])
    return <button
        className={cn(className)}
        data-cal-namespace=""
        data-cal-link="aatif24/30min"
        data-cal-config='{"layout":"month_view"}'
    >
        <Image src="/calendar.svg" alt="instagram" height={0} width={0} className='w-7 dark:w-0' />
        <Image src="/calendar-white.svg" alt="instagram" height={0} width={0} className='dark:w-7 w-0' />
    </button>
};