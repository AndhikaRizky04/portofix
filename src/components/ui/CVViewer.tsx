import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Document, Page, pdfjs } from 'react-pdf';
import { FiX, FiDownload, FiChevronLeft, FiChevronRight, FiMinus, FiPlus } from 'react-icons/fi';
import { useReducedMotion } from '../../hooks/useReducedMotion';

// Setup worker dynamically for Vite
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

interface CVViewerProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

export const CVViewer: React.FC<CVViewerProps> = ({ isOpen, onClose, triggerRef }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(0.8);
  const [pdfLoadError, setPdfLoadError] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const isReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      modalRef.current?.focus();
      
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
        triggerRef.current?.focus();
      };
    }
  }, [isOpen, onClose, triggerRef]);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
    setPdfLoadError(false);
  };

  const onDocumentLoadError = () => {
    setPdfLoadError(true);
  };

  const handlePrevPage = () => {
    if (pageNumber > 1) setPageNumber((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (numPages && pageNumber < numPages) setPageNumber((prev) => prev + 1);
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(0.5, prev - 0.1));
  };

  const handleZoomIn = () => {
    setScale((prev) => Math.min(1.8, prev + 0.1));
  };

  const cvUrl = '/cv/CV-Andhika-Rizky-Nur-Wahyu.pdf';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/80 backdrop-blur-md p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            ref={modalRef}
            tabIndex={-1}
            layoutId="cv-modal"
            className="relative w-full max-w-4xl h-[90vh] bg-ink-900 border-hairline rounded-[4px] flex flex-col justify-between overflow-hidden shadow-2xl focus:outline-none"
            transition={isReducedMotion ? { duration: 0.15 } : { duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-3.5 border-hairline-b bg-ink-800 select-none">
              <span className="label-mono text-steel">SYSTEM // CV_TELEMETRY_PORTAL</span>
              <button
                onClick={onClose}
                className="text-mute hover:text-phosphor transition-colors duration-150 p-1.5 focus-ring-amber cursor-pointer"
                aria-label="Tutup modal"
              >
                <FiX size={18} />
              </button>
            </div>

            {/* Document Render Area */}
            <div className="flex-1 overflow-auto bg-ink-900 flex items-start justify-center p-6 relative min-h-0">
              {pdfLoadError ? (
                /* Fallback Object Embed if PDF reader fails */
                <div className="w-full h-full flex flex-col items-center justify-center p-6 select-none">
                  <div className="absolute inset-0 bg-grid-blueprint pointer-events-none opacity-20" />
                  <object
                    data={cvUrl}
                    type="application/pdf"
                    className="w-full h-full border-hairline max-w-2xl bg-ink-800"
                  >
                    <div className="text-center font-mono text-xs text-mute py-10 space-y-4">
                      <p>Tidak dapat memuat PDF secara otomatis di browser Anda.</p>
                      <a
                        href={cvUrl}
                        download
                        className="inline-flex items-center gap-2 border-hairline bg-phosphor text-ink-900 label-mono px-4 py-2 hover:bg-phosphor-d hover:border-phosphor-d hover:text-bone transition-colors"
                      >
                        <FiDownload size={14} /> UNDUH CV LANGSUNG
                      </a>
                    </div>
                  </object>
                </div>
              ) : (
                <Document
                  file={cvUrl}
                  onLoadSuccess={onDocumentLoadSuccess}
                  onLoadError={onDocumentLoadError}
                  loading={
                    <div className="font-mono text-xs text-steel flex flex-col items-center gap-2 select-none py-12">
                      <span className="w-4 h-4 rounded-full border-2 border-line border-t-phosphor animate-spin" />
                      <span>ESTABLISHING_TELEMETRY_LINK...</span>
                    </div>
                  }
                  className="flex flex-col items-center"
                >
                  <motion.div
                    key={pageNumber}
                    initial={isReducedMotion ? {} : { rotateY: -30, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    style={{ perspective: 1200 }}
                    className="shadow-2xl border-hairline origin-left bg-white"
                  >
                    <Page
                      pageNumber={pageNumber}
                      scale={scale}
                      renderAnnotationLayer={false}
                      renderTextLayer={false}
                      loading={
                        <div className="bg-ink-800 w-[380px] h-[520px] border-hairline flex items-center justify-center font-mono text-[9px] text-mute uppercase tracking-widest">
                          DECOMPRESSING_PAGE_{pageNumber}...
                        </div>
                      }
                    />
                  </motion.div>
                </Document>
              )}
            </div>

            {/* Control Bar (Bottom) */}
            <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-3.5 border-hairline-t bg-ink-800 label-mono text-mute select-none">
              {/* Page Selector */}
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePrevPage}
                  disabled={pageNumber <= 1}
                  className="p-1 border-hairline hover:text-phosphor disabled:opacity-40 disabled:hover:text-mute cursor-pointer"
                  aria-label="Halaman sebelumnya"
                >
                  <FiChevronLeft size={16} />
                </button>
                <span>
                  HALAMAN {pageNumber} DARI {numPages || '?'}
                </span>
                <button
                  onClick={handleNextPage}
                  disabled={numPages === null || pageNumber >= numPages}
                  className="p-1 border-hairline hover:text-phosphor disabled:opacity-40 disabled:hover:text-mute cursor-pointer"
                  aria-label="Halaman berikutnya"
                >
                  <FiChevronRight size={16} />
                </button>
              </div>

              {/* Zoom Panel */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handleZoomOut}
                  className="p-1 border-hairline hover:text-phosphor cursor-pointer"
                  aria-label="Perkecil"
                >
                  <FiMinus size={14} />
                </button>
                <span>{Math.round(scale * 100)}%</span>
                <button
                  onClick={handleZoomIn}
                  className="p-1 border-hairline hover:text-phosphor cursor-pointer"
                  aria-label="Perbesar"
                >
                  <FiPlus size={14} />
                </button>
              </div>

              {/* Action Button */}
              <a
                href={cvUrl}
                download
                className="inline-flex items-center gap-1.5 border-hairline bg-phosphor text-ink-900 py-1.5 px-4 rounded-[3px] hover:bg-phosphor-d hover:text-bone hover:border-phosphor-d transition-colors font-bold"
              >
                <FiDownload size={14} />
                <span>UNDUH CV</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default CVViewer;
