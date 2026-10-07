// Sample Data for Dashboard
const dashboardData = {
  stats: [
    {
      label: "Total Students",
      value: "245",
      change: "+12%",
      positive: true,
      type: "primary",
    },
    {
      label: "Active Enrollments",
      value: "186",
      change: "+8%",
      positive: true,
      type: "primary",
    },
    {
      label: "Active Sections",
      value: "12",
      change: "+3",
      positive: true,
      type: "primary",
    },
    {
      label: "Attendance Rate",
      value: "92.4%",
      change: "+2.1%",
      positive: true,
      type: "dark",
    },
    {
      label: "Assessments Completed",
      value: "87",
      change: "+15",
      positive: true,
      type: "info",
    },
    {
      label: "Outstanding Balance",
      value: "₱6,000",
      change: "-₱1,200",
      positive: true,
      type: "success",
    },
  ],
  sessions: [
    {
      title: "Advanced Mathematics",
      subtitle: "Session materials and records are ready for Phase 2",
      time: "Today, 2:30 PM",
      badge: "active",
      badgeLabel: "In Progress",
    },
    {
      title: "English Literature",
      subtitle: "Discussion materials updated. Waiting for student feedback.",
      time: "Today, 1:00 PM",
      badge: "pending",
      badgeLabel: "Pending",
    },
    {
      title: "Science & Technology",
      subtitle: "All assessments completed and graded.",
      time: "Yesterday, 4:45 PM",
      badge: "completed",
      badgeLabel: "Completed",
    },
    {
      title: "History & Social Studies",
      subtitle: "New chapter added. Awaiting student enrollment.",
      time: "Yesterday, 10:30 AM",
      badge: "pending",
      badgeLabel: "Pending",
    },
  ],
  activities: [
    {
      icon: "📊",
      text: "Dashboard modules are ready for integration.",
      time: "2 minutes ago",
    },
    {
      icon: "✅",
      text: "All attendance records for October have been verified.",
      time: "15 minutes ago",
    },
    {
      icon: "🎓",
      text: "Student enrollment approved for Advanced Analytics course.",
      time: "1 hour ago",
    },
    {
      icon: "📝",
      text: "Assessment results published for 45 students.",
      time: "3 hours ago",
    },
    {
      icon: "⚙️",
      text: "System maintenance completed successfully.",
      time: "Yesterday",
    },
  ],
};

// Render Stats Grid
function renderStats() {
  const statsGrid = document.getElementById("statsGrid");
  statsGrid.innerHTML = dashboardData.stats
    .map(
      (stat) => `
    <div class="stat-card ${stat.type}">
      <div class="stat-label">${stat.label}</div>
      <div class="stat-value">${stat.value}</div>
      <div class="stat-change ${stat.positive ? "positive" : "negative"}">
        ${stat.positive ? "↑" : "↓"} ${stat.change} from last month
      </div>
    </div>
  `
    )
    .join("");
}

// Render Sessions List
function renderSessions() {
  const sessionList = document.getElementById("sessionList");
  sessionList.innerHTML = dashboardData.sessions
    .map(
      (session) => `
    <div class="session-card">
      <div class="session-title">${session.title}</div>
      <div class="session-subtitle">${session.subtitle}</div>
      <div class="session-meta">
        <span class="session-time">${session.time}</span>
        <span class="session-badge ${session.badge}">${session.badgeLabel}</span>
      </div>
    </div>
  `
    )
    .join("");
}

// Render Activity List
function renderActivity() {
  const activityList = document.getElementById("activityList");
  activityList.innerHTML = dashboardData.activities
    .map(
      (activity) => `
    <div class="activity-item">
      <div class="activity-icon">${activity.icon}</div>
      <div class="activity-content">
        <div class="activity-text">${activity.text}</div>
        <div class="activity-time">${activity.time}</div>
      </div>
    </div>
  `
    )
    .join("");
}

// Initialize Dashboard
document.addEventListener("DOMContentLoaded", () => {
  renderStats();
  renderSessions();
  renderActivity();

  // Add event listeners for nav items
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      navItems.forEach((nav) => nav.classList.remove("active"));
      item.classList.add("active");
    });
  });
});

// Google Apps Script Integration (when ready)
// Uncomment and update these functions when connecting to your backend

/*
function fetchDashboardData() {
  google.script.run.withSuccessHandler(function(data) {
    dashboardData = data;
    renderStats();
    renderSessions();
    renderActivity();
  }).getDashboardData();
}

function logActivity(action) {
  google.script.run.logActivity(action);
}
*/
