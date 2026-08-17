import api from "./api";


/* ── Auth ───────────────────────────────────────────────────────────── */
export const authApi = {
  login: (data) => api.post("/auth/login", data),
  // login: () => reply({ success: true, token: "mock-token", user: mockUser }),

  register: (data) => api.post("/auth/register", data),
  // register: (data) =>
    // reply({ success: true, token: "mock-token", user: { ...mockUser, ...data } }),

  me: () => api.get("/auth/me"),
  // me: () => reply({ success: true, user: mockUser }),

  updateProfile: (data) => api.put("/auth/profile", data),
  // updateProfile: (data) => {
    // Object.assign(mockUser, data);
    // return reply({ success: true, user: mockUser });
  // },
};

/* ── Leads ──────────────────────────────────────────────────────────── */
export const leadsApi = {
  list: (params) => api.get("/leads", { params }),
  // list: () => reply({ success: true, count: leads.length, leads }),

  get: (id) => api.get(`/leads/${id}`),
  // get: (id) => reply({ success: true, lead: leads.find((l) => l._id === id) }),

  create: (data) => api.post("/leads", data),
  // create: (data) => {
    // const lead = {
      // _id: uid(),
      // order: 0,
      // tags: [],
      // aiSummary: "",
      // aiRiskScore: null,
      // createdAt: new Date().toISOString(),
      // updatedAt: new Date().toISOString(),
      // ...data,
    // };
    // leads = [lead, ...leads];
    // return reply({ success: true, lead });
  // },

  update: (id, data) => api.put(`/leads/${id}`, data),
  // update: (id, data) => {
  //   leads = leads.map((l) =>
  //     l._id === id ? { ...l, ...data, updatedAt: new Date().toISOString() } : l
  //   );
  //   return reply({ success: true, lead: leads.find((l) => l._id === id) });
  // },

  remove: (id) => api.delete(`/leads/${id}`),
  // remove: (id) => {
  //   leads = leads.filter((l) => l._id !== id);
  //   return reply({ success: true, message: "Lead deleted" });
  // },

  reorder: (updates) => api.patch("/leads/reorder", { updates }),
  // reorder: (updates) => {
  //   updates.forEach((u) => {
  //     leads = leads.map((l) =>
  //       l._id === u.id ? { ...l, status: u.status, order: u.order } : l
  //     );
    // });
    // return reply({ success: true, message: "Pipeline updated" });
  // },
};

/* ── Contacts ───────────────────────────────────────────────────────── */
export const contactsApi = {
  list: (params) => api.get("/contacts", { params }),
  // list: () => reply({ success: true, count: contacts.length, contacts }),

  get: (id) => api.get(`/contacts/${id}`),
  // get: (id) => reply({ success: true, contact: contacts.find((c) => c._id === id) }),

  create: (data) => api.post("/contacts", data),
  // create: (data) => {
  //   const contact = {
  //     _id: uid(),
  //     tags: [],
  //     favorite: false,
  //     createdAt: new Date().toISOString(),
  //     ...data,
  //   };
  //   contacts = [contact, ...contacts];
  //   return reply({ success: true, contact });
  // },

  update: (id, data) => api.put(`/contacts/${id}`, data),
  // update: (id, data) => {
  //   contacts = contacts.map((c) => (c._id === id ? { ...c, ...data } : c));
  //   return reply({ success: true, contact: contacts.find((c) => c._id === id) });
  // },

  remove: (id) => api.delete(`/contacts/${id}`),
//   remove: (id) => {
//     contacts = contacts.filter((c) => c._id !== id);
//     return reply({ success: true, message: "Contact deleted" });
//   },
};

/* ── Notes ──────────────────────────────────────────────────────────── */
export const notesApi = {
  list: (params) => api.get("/notes", { params }),
  // list: () => {
  //   const sorted = [...notes].sort(
  //     (a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0)
  //   );
  //   return reply({ success: true, count: sorted.length, notes: sorted });
  // },

  create: (data) => api.post("/notes", data),
  // create: (data) => {
  //   const note = {
  //     _id: uid(),
  //     content: data.content,
  //     lead: data.lead ? leadLite(data.lead) : null,
  //     contact: null,
  //     pinned: Boolean(data.pinned),
  //     createdAt: new Date().toISOString(),
  //   };
  //   notes = [note, ...notes];
  //   return reply({ success: true, note });
  // },

  update: (id, data) => api.put(`/notes/${id}`, data),
  // update: (id, data) => {
  //   notes = notes.map((n) => {
  //     if (n._id !== id) return n;
  //     const next = { ...n, ...data };
  //     if ("lead" in data) next.lead = data.lead ? leadLite(data.lead) : null;
  //     return next;
  //   });
  //   return reply({ success: true, note: notes.find((n) => n._id === id) });
  // },

  remove: (id) => api.delete(`/notes/${id}`),

  // remove: (id) => {
  //   notes = notes.filter((n) => n._id !== id);
  //   return reply({ success: true, message: "Note deleted" });
  // },
};

/* ── Tasks ──────────────────────────────────────────────────────────── */
export const tasksApi = {
  list: (params) => api.get("/tasks", { params }),
  // list: () => reply({ success: true, count: tasks.length, tasks }),

  // create: (data) => api.post("/tasks", data),
  // create: (data) => {
  //   const task = {
  //     _id: uid(),
  //     description: "",
  //     relatedContact: null,
  //     createdAt: new Date().toISOString(),
  //     ...data,
  //     relatedLead: data.relatedLead ? leadLite(data.relatedLead) : null,
  //     completedAt: data.status === "Completed" ? new Date().toISOString() : null,
  //   };
  //   tasks = [task, ...tasks];
  //   return reply({ success: true, task });
  // },

  update: (id, data) => api.put(`/tasks/${id}`, data),
  // update: (id, data) => {
  //   tasks = tasks.map((t) => {
  //     if (t._id !== id) return t;
  //     const next = { ...t, ...data };
  //     if ("relatedLead" in data)
  //       next.relatedLead = data.relatedLead ? leadLite(data.relatedLead) : null;
  //     if (data.status === "Completed" && !next.completedAt)
  //       next.completedAt = new Date().toISOString();
  //     if (data.status && data.status !== "Completed") next.completedAt = null;
  //     return next;
  //   });
  //   return reply({ success: true, task: tasks.find((t) => t._id === id) });
  // },

  remove: (id) => api.delete(`/tasks/${id}`),
//   remove: (id) => {
//     tasks = tasks.filter((t) => t._id !== id);
//     return reply({ success: true, message: "Task deleted" });
//   },
};

/* ── AI (canned mock responses) ─────────────────────────────────────── */
export const aiApi = {
  status: () => api.get("/ai/status"),
  // status: () => reply(mockAiStatus),

  leadSummary: (data) => api.post("/ai/lead-summary", data),
  // leadSummary: () => reply(mockAiSummary, 800),

  generateEmail: (data) => api.post("/ai/generate-email", data),
  // generateEmail: () => reply(mockAiEmail, 900),

  salesInsights: (data) => api.post("/ai/sales-insights", data),
  // salesInsights: () => reply(mockAiInsights, 900),
};


export const analyticsApi = {
  overview: () => api.get("/analytics/overview"),
  // overview: () => reply(buildOverview()),
};
