import { cn } from '@/lib/utils';

export function EditorController({
    className,
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <div className={cn(className)}>
            <div className="container ">Editor ui controls here</div>
        </div>
    );
}
