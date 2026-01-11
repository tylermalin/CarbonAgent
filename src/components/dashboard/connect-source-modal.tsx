"use client";

import { useState } from 'react';
import { Dialog, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Database, Truck, Zap, FileText, CheckCircle2, Loader2 } from 'lucide-react';

interface ConnectSourceModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

type SourceType = 'utility' | 'supply' | 'transport' | 'accounting';

export function ConnectSourceModal({ open, onOpenChange }: ConnectSourceModalProps) {
    const [step, setStep] = useState<'select' | 'connecting' | 'success'>('select');
    const [selectedSource, setSelectedSource] = useState<SourceType | null>(null);

    const handleConnect = () => {
        setStep('connecting');
        // Simulate connection delay
        setTimeout(() => {
            setStep('success');
        }, 2000);
    };

    const handleClose = () => {
        setStep('select');
        setSelectedSource(null);
        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            {step === 'select' && (
                <>
                    <DialogHeader>
                        <DialogTitle>Connect Data Source</DialogTitle>
                        <DialogDescription>
                            Select the type of data stream you want to integrate with the Carbon Agent.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="grid grid-cols-2 gap-6 py-8">
                        <SourceOption
                            icon={Zap}
                            label="Utility Provider"
                            active={selectedSource === 'utility'}
                            onClick={() => setSelectedSource('utility')}
                        />
                        <SourceOption
                            icon={Database}
                            label="ERP / Supply Chain"
                            active={selectedSource === 'supply'}
                            onClick={() => setSelectedSource('supply')}
                        />
                        <SourceOption
                            icon={Truck}
                            label="Fleet / Telematics"
                            active={selectedSource === 'transport'}
                            onClick={() => setSelectedSource('transport')}
                        />
                        <SourceOption
                            icon={FileText}
                            label="Accounting System"
                            active={selectedSource === 'accounting'}
                            onClick={() => setSelectedSource('accounting')}
                        />
                    </div>

                    <DialogFooter>
                        <Button variant="outline" onClick={handleClose}>Cancel</Button>
                        <Button disabled={!selectedSource} onClick={handleConnect}>Connect Channel</Button>
                    </DialogFooter>
                </>
            )}

            {step === 'connecting' && (
                <div className="text-center py-8">
                    <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-lg">Establishing Secure Link</h3>
                    <p className="text-muted-foreground mt-2">Verifying credentials and shaking hands with the API...</p>
                </div>
            )}

            {step === 'success' && (
                <div className="text-center py-8">
                    <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg">Source Connected!</h3>
                    <p className="text-muted-foreground mt-2">
                        The Agent is now ingesting data from this source.
                        Initial analysis will be ready in ~5 minutes.
                    </p>
                    <Button className="mt-6" onClick={handleClose}>Done</Button>
                </div>
            )}
        </Dialog>
    );
}

function SourceOption({ icon: Icon, label, active, onClick }: { icon: any, label: string, active: boolean, onClick: () => void }) {
    return (
        <div
            onClick={onClick}
            className={`
        cursor-pointer rounded-lg border p-4 flex flex-col items-center gap-3 transition-all hover:bg-accent/5
        ${active ? 'border-primary ring-1 ring-primary bg-primary/5' : 'border-border'}
      `}
        >
            <Icon className={`w-8 h-8 ${active ? 'text-primary' : 'text-muted-foreground'}`} />
            <span className={`font-medium text-sm ${active ? 'text-foreground' : 'text-muted-foreground'}`}>{label}</span>
        </div>
    );
}
