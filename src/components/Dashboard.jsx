import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  TrendingUp, 
  FileText, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  Search, 
  Bell, 
  Plus, 
  ShieldCheck, 
  Key, 
  RefreshCw,
  ExternalLink
} from 'lucide-react';

const Dashboard = () => {
  // Organizations data
  const organizations = [
    { id: 1, name: 'Rimo MChJ', tin: '309485721', status: 'Faol' },
    { id: 2, name: 'Techno-Hub XK', tin: '204918274', status: 'Faol' },
    { id: 3, name: 'Global Export YaTT', tin: '501239845', status: 'Faol' },
  ];

  const [activeOrg, setActiveOrg] = useState(organizations[0]);
  const [signingReport, setSigningReport] = useState(null); // Report being signed
  const [pinCode, setPinCode] = useState('');
  const [isSigning, setIsSigning] = useState(false);
  const [signSuccess, setSignSuccess] = useState(false);

  // Dynamic Reports data
  const [reports, setReports] = useState([
    {
      id: 'rep-01',
      title: "Aylanmadan olinadigan soliq",
      period: "2-Chorak, 2026",
      amount: "14,235,000 UZS",
      status: "Yuborilmagan", // Yuborilmagan, Kutilmoqda, Topshirildi, Rad etildi
      lastUpdated: "Bugun, 09:12",
    },
    {
      id: 'rep-02',
      title: "Jismoniy shaxslardan olinadigan daromad solig'i (JShODS)",
      period: "Iyun, 2026",
      amount: "4,890,000 UZS",
      status: "Topshirildi",
      lastUpdated: "Kecha, 17:45",
      docId: "gov-948271",
    },
    {
      id: 'rep-03',
      title: "Qo'shilgan qiymat solig'i (QQS)",
      period: "Iyun, 2026",
      amount: "32,450,000 UZS",
      status: "Kutilmoqda",
      lastUpdated: "12 Iul, 14:20",
    },
    {
      id: 'rep-04',
      title: "Yer solig'i",
      period: "Yillik, 2026",
      amount: "8,200,000 UZS",
      status: "Rad etildi",
      lastUpdated: "10 Iul, 11:30",
      reason: "Kadastr raqami xato kiritilgan",
    }
  ]);

  // Statistics depending on activeOrg
  const getStats = (orgId) => {
    switch (orgId) {
      case 2:
        return { revenue: '185,400,000', taxDue: '7,416,000', submittedCount: 8, pendingCount: 1 };
      case 3:
        return { revenue: '42,100,000', taxDue: '1,684,000', submittedCount: 3, pendingCount: 0 };
      default:
        return { revenue: '356,890,000', taxDue: '19,125,000', submittedCount: 14, pendingCount: 2 };
    }
  };

  const stats = getStats(activeOrg.id);

  // Trigger ERI signature flow
  const handleStartSign = (report) => {
    setSigningReport(report);
    setPinCode('');
    setSignSuccess(false);
    setIsSigning(false);
  };

  const handleConfirmSignature = (e) => {
    e.preventDefault();
    if (!pinCode || pinCode.length < 4) return;
    
    setIsSigning(true);
    // Simulate API request to hisobot.gov.uz
    setTimeout(() => {
      setIsSigning(false);
      setSignSuccess(true);
      
      // Update report status in local state
      setTimeout(() => {
        setReports(prev => prev.map(rep => {
          if (rep.id === signingReport.id) {
            return {
              ...rep,
              status: 'Topshirildi',
              docId: `gov-${Math.floor(100000 + Math.random() * 900000)}`,
              lastUpdated: 'Hozirgina'
            };
          }
          return rep;
        }));
        setSigningReport(null);
      }, 1500);
    }, 2000);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="dashboard">
      <div className="absolute inset-0 bg-[#F5F5F7]/30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3 block"
          >
            Rimo interfeysi
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-[#111111]"
          >
            Boshqaruv paneli bilan tanishing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-500 mt-4 text-base md:text-lg"
          >
            Quyida Rimo interfeysining interaktiv ishchi demo modeli berilgan. ERI bilan imzolash jarayonini sinab ko'ring.
          </motion.p>
        </div>

        {/* Dashboard Shell */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-[32px] border border-gray-200 shadow-2xl overflow-hidden flex flex-col md:flex-row h-[780px] max-w-6xl mx-auto text-left"
          id="dashboard-showcase-container"
        >
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-gray-50 border-r border-gray-150 p-6 flex flex-col justify-between shrink-0">
            <div>
              {/* Profile / Org Selector */}
              <div className="mb-8">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-2">Tashkilotlar</span>
                <div className="relative">
                  <select 
                    value={activeOrg.id}
                    onChange={(e) => {
                      const selected = organizations.find(o => o.id === parseInt(e.target.value));
                      setActiveOrg(selected);
                    }}
                    className="w-full bg-white border border-gray-200/80 rounded-xl px-3 py-2 text-sm font-semibold text-gray-800 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 cursor-pointer appearance-none"
                    id="dashboard-org-select"
                  >
                    {organizations.map(org => (
                      <option key={org.id} value={org.id}>{org.name}</option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">▼</div>
                </div>
                <div className="mt-2 text-[10px] text-gray-400 flex justify-between px-1">
                  <span>STIR (TIN): {activeOrg.tin}</span>
                  <span className="text-emerald-600 font-semibold">{activeOrg.status}</span>
                </div>
              </div>

              {/* Navigation links inside dashboard */}
              <nav className="space-y-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block px-3 mb-2">Menyu</span>
                <button className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl bg-white border border-gray-150 text-blue-600 text-sm font-semibold shadow-xs">
                  <Building2 className="w-4 h-4" />
                  <span>Hisobotlar</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl hover:bg-gray-150/40 text-gray-600 text-sm font-medium transition-colors">
                  <TrendingUp className="w-4 h-4" />
                  <span>Analitika</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl hover:bg-gray-150/40 text-gray-600 text-sm font-medium transition-colors">
                  <Building2 className="w-4 h-4" />
                  <span>Tashkilotlarim</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl hover:bg-gray-150/40 text-gray-600 text-sm font-medium transition-colors">
                  <ShieldCheck className="w-4 h-4" />
                  <span>ERI kalitlari</span>
                </button>
              </nav>
            </div>

            {/* API Status widget */}
            <div className="bg-white border border-gray-150 p-4 rounded-2xl shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-gray-400 uppercase">Davlat API statusi</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>hisobot.gov.uz: OK</span>
              </div>
              <p className="text-[9px] text-gray-400 mt-1">Avtomatik sinxronizatsiya faol</p>
            </div>
          </div>

          {/* Main workspace */}
          <div className="flex-1 bg-gray-50/30 p-6 md:p-8 flex flex-col overflow-y-auto">
            {/* Topbar inside dashboard */}
            <div className="flex justify-between items-center pb-6 border-b border-gray-100 mb-6 shrink-0">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{activeOrg.name}</h3>
                <p className="text-xs text-gray-500">Kompaniya soliq portali boshqaruvi</p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3">
                <button className="p-2 rounded-xl bg-white border border-gray-150 text-gray-500 hover:text-gray-800 shadow-2xs hover:shadow-xs transition-all relative">
                  <Bell className="w-4 h-4" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-blue-600 rounded-full" />
                </button>
                <button className="px-3 py-2 rounded-xl bg-[#111111] hover:bg-black text-white text-xs font-semibold shadow-sm flex items-center gap-1">
                  <Plus className="w-3.5 h-3.5" />
                  <span>Yangi hisobot</span>
                </button>
              </div>
            </div>

            {/* Stats Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 shrink-0">
              <div className="bg-white border border-gray-150/70 p-5 rounded-2xl shadow-2xs">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Joriy chorak aylanmasi</span>
                <div className="text-xl font-bold text-gray-800">{stats.revenue} UZS</div>
                <div className="text-[10px] text-emerald-500 font-semibold mt-1 flex items-center gap-0.5">
                  <TrendingUp className="w-3 h-3" />
                  <span>O'tgan chorakka nisbatan +12.4%</span>
                </div>
              </div>
              <div className="bg-white border border-gray-150/70 p-5 rounded-2xl shadow-2xs">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Hisoblangan soliq (taxminiy)</span>
                <div className="text-xl font-bold text-gray-800">{stats.taxDue} UZS</div>
                <div className="text-[10px] text-gray-400 mt-1">Soliq stavkasi: 4% (soddalashtirilgan)</div>
              </div>
              <div className="bg-white border border-gray-150/70 p-5 rounded-2xl shadow-2xs">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Muvaffaqiyatli hisobotlar</span>
                <div className="text-xl font-bold text-[#111111]">{stats.submittedCount} ta</div>
                <div className="text-[10px] text-gray-400 mt-1">{stats.pendingCount} ta kutilayotgan jarayon</div>
              </div>
            </div>

            {/* Reports List Table Area */}
            <div className="flex-1 bg-white border border-gray-150/70 rounded-2xl shadow-2xs overflow-hidden flex flex-col">
              <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                <span className="font-bold text-xs text-gray-800 uppercase tracking-wider">Hisobotlar ro'yxati</span>
                <span className="text-[10px] text-gray-400 flex items-center gap-1">
                  <RefreshCw className="w-3 h-3 animate-spin" />
                  Yangilandi: Hozir
                </span>
              </div>

              <div className="flex-1 overflow-y-auto">
                <table className="w-full text-left border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="border-b border-gray-100 text-gray-400 font-semibold text-[10px] uppercase bg-gray-50/20">
                      <th className="p-4">Hisobot nomi</th>
                      <th className="p-4">Davri</th>
                      <th className="p-4">Miqdori</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Amal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reports.map((report) => (
                      <tr key={report.id} className="border-b border-gray-100/50 hover:bg-gray-50/40 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-2.5">
                            <div className="p-1.5 rounded-lg bg-gray-100">
                              <FileText className="w-4 h-4 text-gray-500" />
                            </div>
                            <div>
                              <span className="font-semibold text-gray-800 block leading-tight">{report.title}</span>
                              <span className="text-[10px] text-gray-400 mt-0.5 block">Oxirgi o'zgarish: {report.lastUpdated}</span>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 font-medium text-gray-600">{report.period}</td>
                        <td className="p-4 font-semibold text-gray-800">{report.amount}</td>
                        <td className="p-4">
                          {report.status === 'Topshirildi' && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-[10px] border border-emerald-100">
                              <CheckCircle className="w-3.5 h-3.5" />
                              Topshirildi
                            </span>
                          )}
                          {report.status === 'Kutilmoqda' && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold text-[10px] border border-blue-100">
                              <Clock className="w-3.5 h-3.5 animate-pulse" />
                              Kutilmoqda
                            </span>
                          )}
                          {report.status === 'Yuborilmagan' && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 font-semibold text-[10px] border border-amber-100">
                              <AlertCircle className="w-3.5 h-3.5" />
                              Tayyor
                            </span>
                          )}
                          {report.status === 'Rad etildi' && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-50 text-red-700 font-semibold text-[10px] border border-red-100 group relative cursor-help">
                              <AlertCircle className="w-3.5 h-3.5" />
                              Rad etilgan
                              <span className="hidden md:group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 bg-neutral-900 text-white rounded text-[9px] w-48 shadow z-10 leading-normal font-normal">
                                Rad etish sababi: {report.reason}
                              </span>
                            </span>
                          )}
                        </td>
                        <td className="p-4 text-right">
                          {report.status === 'Yuborilmagan' ? (
                            <button
                              onClick={() => handleStartSign(report)}
                              className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-[11px] shadow-xs flex items-center gap-1 ml-auto transition-colors"
                              id={`btn-sign-${report.id}`}
                            >
                              <Send className="w-3 h-3" />
                              <span>Yuborish</span>
                            </button>
                          ) : report.status === 'Topshirildi' ? (
                            <a
                              href={`https://hisobot.gov.uz/verify/${report.docId}`}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-0.5 text-blue-600 hover:text-blue-800 font-semibold text-[11px] ml-auto"
                            >
                              <span>Kvitansiya</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : (
                            <span className="text-gray-400 text-[11px]">—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ERI Signature Interactive Modal */}
        <AnimatePresence>
          {signingReport && (
            <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-3xl border border-gray-150 p-8 max-w-md w-full shadow-2xl text-left"
                id="eri-signature-modal"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                      <Key className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-base">ERI bilan imzolash</h4>
                      <p className="text-xs text-gray-400">hisobot.gov.uz API integratsiyasi</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSigningReport(null)}
                    disabled={isSigning}
                    className="p-1 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    ✕
                  </button>
                </div>

                {!signSuccess ? (
                  <form onSubmit={handleConfirmSignature} className="space-y-5">
                    <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 space-y-2.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">Tashkilot:</span>
                        <span className="font-semibold text-gray-800">{activeOrg.name}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">Hisobot:</span>
                        <span className="font-semibold text-gray-800">{signingReport.title}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">Soliq miqdori:</span>
                        <span className="font-bold text-gray-800 text-sm">{signingReport.amount}</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">ERI parolini kiriting</label>
                      <input 
                        type="password"
                        placeholder="••••"
                        maxLength={8}
                        value={pinCode}
                        disabled={isSigning}
                        onChange={(e) => setPinCode(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold text-center tracking-widest focus:outline-none focus:ring-1 focus:ring-blue-600 focus:bg-white transition-all shadow-inner"
                        required
                        id="eri-pin-input"
                      />
                      <p className="text-[10px] text-gray-400 mt-2 text-center">
                        Kalit: <strong className="text-gray-700">{activeOrg.tin}_eri.key</strong>. Eslatma: Demo sinov uchun ixtiyoriy 4 ta raqam kiriting.
                      </p>
                    </div>

                    <button
                      type="submit"
                      disabled={isSigning || pinCode.length < 4}
                      className={`w-full py-4 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md transition-all ${
                        isSigning
                          ? 'bg-blue-500/80 cursor-wait'
                          : pinCode.length >= 4
                            ? 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg'
                            : 'bg-gray-300 cursor-not-allowed'
                      }`}
                      id="confirm-sign-btn"
                    >
                      {isSigning ? (
                        <>
                          <RefreshCw className="w-4.5 h-4.5 animate-spin" />
                          <span>Yuborilmoqda...</span>
                        </>
                      ) : (
                        <>
                          <ShieldCheck className="w-4.5 h-4.5" />
                          <span>Imzolash va Topshirish</span>
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="py-6 flex flex-col items-center justify-center text-center space-y-4">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: 'spring', damping: 15 }}
                      className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600"
                    >
                      <CheckCircle className="w-8 h-8" />
                    </motion.div>
                    <div>
                      <h5 className="font-bold text-gray-800 text-lg">Muvaffaqiyatli topshirildi!</h5>
                      <p className="text-xs text-gray-500 mt-1 max-w-[280px] mx-auto">
                        Hisobot hisobot.gov.uz portalida ro'yxatga olindi va qabul qilindi. Kvitansiya saqlandi.
                      </p>
                    </div>
                    <div className="bg-emerald-50/50 px-4 py-2 rounded-xl text-[10px] text-emerald-700 font-mono border border-emerald-100/50">
                      ID: gov-{Math.floor(100000 + Math.random() * 900000)}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Dashboard;
