import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Container,
  Grid,
  TextField,
  List,
  ListItem,
  Chip,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";
import {
  Mail,
  Phone,
  LocationOn,
  GitHub,
  LinkedIn,
  Twitter,
  Menu as MenuIcon,
  Close,
  Code,
  Storage,
  Dns,
  Palette,
  Work,
  School,
  EmojiEvents,
  WhatsApp,
  KeyboardArrowDown,
} from "@mui/icons-material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const styles = {
  root: {
    minHeight: "100vh",
    backgroundColor: "#000000",
    color: "#ffffff",
    overflowX: "hidden",
  },
  nav: (isScrolled) => ({
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 50,
    transition: "all 0.3s",
    backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.95)" : "transparent",
    backdropFilter: isScrolled ? "blur(10px)" : "none",
    boxShadow: isScrolled ? "0 4px 6px rgba(0, 0, 0, 0.3)" : "none",
  }),
  navContainer: {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 24px",
  },
  navContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "80px",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: 700,
    color: "#00FFFF",
  },
  navLinks: {
    display: { xs: "none", md: "flex" },
    gap: "32px",
  },
  navButton: (isActive) => ({
    textTransform: "capitalize",
    color: isActive ? "#00FFFF" : "#ffffff",
    "&:hover": {
      color: "#00FFFF",
    },
  }),
  mobileMenuButton: {
    display: { xs: "block", md: "none" },
    color: "#ffffff",
  },
  mobileMenu: {
    display: { xs: "block", md: "none" },
    paddingBottom: "16px",
  },
  mobileNavButton: {
    display: "block",
    width: "100%",
    textAlign: "left",
    padding: "8px 0",
    textTransform: "capitalize",
    color: "#ffffff",
    "&:hover": {
      color: "#00FFFF",
    },
  },
  heroSection: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "80px 24px 24px",
  },
  heroContent: {
    textAlign: "center",
    maxWidth: "896px",
    margin: "0 auto",
  },
  heroInitial: {
    width: "128px",
    height: "128px",
    margin: "0 auto 24px",
    borderRadius: "50%",
    background: "linear-gradient(to right, #06B6D4, #00FFFF)",
    padding: "4px",
  },
  heroInitialInner: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    backgroundColor: "#000000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "3.75rem",
    fontWeight: 700,
  },
  heroTitle: {
    fontSize: { xs: "3rem", md: "4.5rem" },
    fontWeight: 700,
    marginBottom: "16px",
  },
  heroSubtitle: {
    fontSize: { xs: "1.5rem", md: "1.875rem" },
    color: "#00FFFF",
    marginBottom: "24px",
  },
  heroDescription: {
    fontSize: "1.125rem",
    color: "#D1D5DB",
    marginBottom: "32px",
    maxWidth: "672px",
    margin: "0 auto 32px",
  },
  heroButtons: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "16px",
    marginBottom: "32px",
  },
  outlineButton: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "12px 24px",
    backgroundColor: "transparent",
    border: "1px solid #00FFFF",
    color: "#00FFFF",
    borderRadius: "8px",
    transition: "all 0.3s",
    textTransform: "none",
    "&:hover": {
      boxShadow: "0 0 30px #00FFFF",
      backgroundColor: "transparent",
    },
  },
  aboutSection: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "80px 24px",
    backgroundColor: "#111827",
  },
  sectionTitle: {
    fontSize: { xs: "2.25rem", md: "3rem" },
    fontWeight: 700,
    textAlign: "center",
    marginBottom: "48px",
    color: "#00FFFF",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    borderRadius: "16px",
    padding: "32px",
    border: "1px solid rgba(0, 255, 255, 0.2)",
    transition: "all 0.3s",
    "&:hover": {
      borderColor: "rgba(0, 255, 255, 0.4)",
    },
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginBottom: "16px",
  },
  cardIcon: {
    color: "#00FFFF",
    fontSize: "32px",
  },
  cardTitle: {
    fontSize: "1.5rem",
    fontWeight: 700,
  },
  skillsSection: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "80px 24px",
    backgroundColor: "#000000",
  },
  skillCard: {
    position: "relative",
    borderRadius: "16px",
    overflow: "hidden",
    perspective: "1000px",
    height: "320px",
  },
  skillCardInner: (isHovered) => ({
    position: "relative",
    width: "100%",
    height: "100%",
    transition: "transform 0.7s",
    transformStyle: "preserve-3d",
    transform: isHovered ? "rotateY(180deg)" : "rotateY(0deg)",
  }),
  skillCardFace: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    borderRadius: "16px",
    padding: "24px",
    border: "1px solid rgba(0, 255, 255, 0.2)",
    backfaceVisibility: "hidden",
  },
  skillCardFront: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  skillCardBack: {
    transform: "rotateY(180deg)",
  },
  projectsSection: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "80px 24px",
    backgroundColor: "#111827",
  },
  projectCard: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    borderRadius: "16px",
    padding: "32px",
    border: "1px solid rgba(0, 255, 255, 0.2)",
    transition: "all 0.3s",
    "&:hover": {
      borderColor: "rgba(0, 255, 255, 0.4)",
    },
  },
  projectHeader: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "space-between",
    alignItems: { xs: "flex-start", md: "flex-start" },
    marginBottom: "24px",
  },
  projectChip: {
    marginTop: { xs: "16px", md: 0 },
    padding: "8px 16px",
    backgroundColor: "rgba(0, 255, 255, 0.2)",
    borderRadius: "9999px",
    fontSize: "0.875rem",
    color: "#ffffff",
  },
  projectFeatureBox: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: "8px",
    padding: "16px",
  },
  techChip: {
    padding: "4px 12px",
    backgroundColor: "rgba(0, 255, 255, 0.2)",
    borderRadius: "9999px",
    fontSize: "0.75rem",
    color: "#ffffff",
    margin: "4px",
  },
  contactSection: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "80px 24px",
    backgroundColor: "#000000",
  },
  contactInput: {
    "& .MuiOutlinedInput-root": {
      color: "#00FFFF",
      "& fieldset": {
        borderColor: "#00FFFF",
      },
      "&:hover fieldset": {
        borderColor: "#00FFFF",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#67E8F9",
      },
    },
    "& .MuiInputLabel-root": {
      color: "#6B7280",
    },
    "& .MuiInputBase-input::placeholder": {
      color: "#6B7280",
    },
  },
  mapContainer: {
    borderRadius: "16px",
    overflow: "hidden",
    border: "1px solid rgba(0, 255, 255, 0.2)",
  },
  footer: {
    backgroundColor: "#09090B",
    borderTop: "1px solid rgba(0, 255, 255, 0.2)",
    padding: "48px 24px",
  },
  socialButton: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    backgroundColor: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s",
    "& svg": {
      color: "#000000",
      transition: "color 0.3s",
    },
    "&:hover": {
      boxShadow: "0 0 20px #00FFFF",
    },
    "&:hover svg": {
      color: "#00FFFF",
    },
  },
};

const GITHUB_URL = "https://github.com/Mihir-Kukadiya";
const LINKEDIN_URL = "https://www.linkedin.com/in/mihir-kukadiya-590a842a0/";
const WHATSAPP_URL = "https://wa.me/917990856214";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const heroRef = useRef(null);
  const aboutCardsRef = useRef([]);
  const skillCardsRef = useRef([]);
  const projectCardsRef = useRef([]);
  const contactRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
    script.async = true;

    script.onload = () => {
      const gsap = window.gsap;

      gsap.from(heroRef.current?.querySelector(".hero-initial"), {
        scale: 0,
        rotation: 360,
        duration: 1,
        ease: "back.out(1.7)",
      });

      gsap.from(heroRef.current?.querySelector(".hero-title"), {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(heroRef.current?.querySelector(".hero-subtitle"), {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "power3.out",
      });

      gsap.from(heroRef.current?.querySelector(".hero-description"), {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.7,
        ease: "power3.out",
      });

      gsap.from(heroRef.current?.querySelector(".hero-buttons"), {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.9,
        ease: "power3.out",
      });

      const script2 = document.createElement("script");
      script2.src =
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js";
      script2.async = true;

      script2.onload = () => {
        const ScrollTrigger = window.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        aboutCardsRef.current.forEach((card, index) => {
          if (!card) return;

          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
            x: index === 0 ? 100 : index === 1 ? -100 : 0,
            y: index === 2 ? 80 : 0,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
          });
        });

        skillCardsRef.current.forEach((card, index) => {
          if (card) {
            gsap.from(card, {
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
              y: 100,
              opacity: 0,
              rotation: 5,
              duration: 0.5,
              delay: index * 0.1,
              ease: "back.out(1.7)",
            });
          }
        });

        projectCardsRef.current.forEach((card, index) => {
          if (card) {
            gsap.from(card, {
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
              scale: 0.8,
              opacity: 0,
              duration: 0.5,
              delay: index * 0.2,
              ease: "power3.out",
            });
          }
        });

        if (contactRef.current) {
          gsap.from(contactRef.current, {
            scrollTrigger: {
              trigger: contactRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          });
        }
      };

      document.body.appendChild(script2);
    };

    document.body.appendChild(script);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const skillsData = [
    {
      category: "Frontend",
      icon: <Palette sx={{ fontSize: 40 }} />,
      color: "purple",
      skills: [
        "React JS",
        "JavaScript (ES6+)",
        "HTML/CSS",
        "Tailwind CSS",
        "Bootstrap",
        "MUI",
      ],
    },
    {
      category: "Backend",
      icon: <Dns sx={{ fontSize: 40 }} />,
      color: "pink",
      skills: ["Node.js", "Express.js", "REST APIs", "MVC Architecture"],
    },
    {
      category: "Database",
      icon: <Storage sx={{ fontSize: 40 }} />,
      color: "blue",
      skills: ["MongoDB", "MySQL"],
    },
    {
      category: "Tools & Others",
      icon: <Code sx={{ fontSize: 40 }} />,
      color: "green",
      skills: ["Git/GitHub", "VS Code", "Razorpay", "Stripe", "Firebase"],
    },
  ];

  const projects = [
    {
      title: "FurniCraft",
      subtitle: "E-Commerce Furniture Platform",
      description:
        "A comprehensive e-commerce platform designed for furniture retailers and customers, featuring advanced product management, secure authentication, and seamless shopping experiences.",
      features: [
        "Product & User Management",
        "Shopping Cart & Wishlist",
        "Multi-payment Integration",
        "Admin Dashboard",
      ],
      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Payment Gateway",
        "REST API",
      ],
      liveUrl: "https://furnicraft-eta.vercel.app/",
    },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={styles.root}>
        {/* Navigation */}
        <Box component="nav" sx={styles.nav(isScrolled)}>
          <Box sx={styles.navContainer}>
            <Box sx={styles.navContent}>
              <Typography
                sx={{ ...styles.logo, cursor: "pointer" }}
                onClick={() => scrollToSection("home")}
              >
                Portfolio
              </Typography>

              <Box sx={styles.navLinks}>
                {["home", "about", "skills", "projects", "contact"].map(
                  (section) => (
                    <Button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      sx={styles.navButton(activeSection === section)}
                    >
                      {section === "about" ? "About Us" : section}
                    </Button>
                  )
                )}
              </Box>

              <IconButton
                sx={styles.mobileMenuButton}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <Close /> : <MenuIcon />}
              </IconButton>
            </Box>

            {mobileMenuOpen && (
              <Box sx={styles.mobileMenu}>
                {["home", "about", "skills", "projects", "contact"].map(
                  (section) => (
                    <Button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      sx={styles.mobileNavButton}
                    >
                      {section === "about" ? "About Us" : section}
                    </Button>
                  )
                )}
              </Box>
            )}
          </Box>
        </Box>

        {/* Hero Section */}
        <Box id="home" ref={heroRef} sx={styles.heroSection}>
          <Box sx={styles.heroContent}>
            <Box sx={{ marginBottom: "32px" }}>
              <Box className="hero-initial" sx={styles.heroInitial}>
                <Box sx={styles.heroInitialInner}>MK</Box>
              </Box>
              <Typography className="hero-title" sx={styles.heroTitle}>
                <Box component="span" sx={{ display: "block" }}>
                  Hi,
                </Box>
                <Box component="span" sx={{ display: "block" }}>
                  I'm Mihir Kukadiya
                </Box>
              </Typography>
              <Typography className="hero-subtitle" sx={styles.heroSubtitle}>
                And I'm{" "}
                <span style={{ display: "inline-block" }}>
                  Full Stack Developer
                </span>
              </Typography>
              <Typography
                className="hero-description"
                sx={styles.heroDescription}
              >
                A passionate and dedicated web developer with a strong
                foundation in frontend technologies like React, JavaScript, and
                modern UI/UX design. I love crafting interactive, responsive,
                and visually engaging web applications that solve real-world
                problems.
              </Typography>
              <Box className="hero-buttons" sx={styles.heroButtons}>
                <Button
                  component="a"
                  href="/Mihir Resume.pdf"
                  download
                  sx={styles.outlineButton}
                >
                  Download Resume
                </Button>

                <Button
                  onClick={() => scrollToSection("contact")}
                  sx={styles.outlineButton}
                >
                  Contact Me
                </Button>
              </Box>
            </Box>
            <IconButton
              onClick={() => scrollToSection("about")}
              sx={{ animation: "bounce 1s infinite" }}
            >
              <KeyboardArrowDown sx={{ fontSize: 40, color: "#00FFFF" }} />
            </IconButton>
          </Box>
        </Box>

        {/* About Section */}
        <Box id="about" sx={styles.aboutSection}>
          <Container maxWidth="lg">
            <Typography sx={styles.sectionTitle}>About Me</Typography>
            <Grid container spacing={4} alignItems="stretch">
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  ref={(el) => (aboutCardsRef.current[1] = el)}
                  sx={{ ...styles.card, height: "100%" }}
                >
                  <Box sx={styles.cardHeader}>
                    <Work sx={styles.cardIcon} />
                    <Typography sx={styles.cardTitle}>Experience</Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: "#D1D5DB",
                      marginBottom: "8px",
                      fontWeight: 600,
                    }}
                  >
                    Full Stack Development Intern
                  </Typography>
                  <Typography sx={{ color: "#00FFFF", marginBottom: "8px" }}>
                    JBS Technology
                  </Typography>
                  <List
                    sx={{ color: "#9CA3AF", fontSize: "0.875rem", padding: 0 }}
                  >
                    <ListItem sx={{ padding: "4px 0" }}>
                      • Real-time web application development
                    </ListItem>
                    <ListItem sx={{ padding: "4px 0" }}>
                      • Responsive UI design & implementation
                    </ListItem>
                    <ListItem sx={{ padding: "4px 0" }}>
                      • API creation & database integration
                    </ListItem>
                    <ListItem sx={{ padding: "4px 0" }}>
                      • Code reviews & testing
                    </ListItem>
                  </List>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  ref={(el) => (aboutCardsRef.current[0] = el)}
                  sx={{ ...styles.card, height: "100%" }}
                >
                  <Box sx={styles.cardHeader}>
                    <School sx={styles.cardIcon} />
                    <Typography sx={styles.cardTitle}>Education</Typography>
                  </Box>
                  <Typography sx={{ color: "#D1D5DB", marginBottom: "8px" }}>
                    BCA (TYBCA SEM-6) - Running
                  </Typography>
                  <Typography sx={{ color: "#9CA3AF", fontSize: "0.875rem" }}>
                    Prof V.B. Shah Institute & Associated Colleges
                  </Typography>
                  <Typography sx={{ color: "#9CA3AF", fontSize: "0.875rem" }}>
                    Field: Information Technology
                  </Typography>
                </Box>
              </Grid>

              <Grid size={{ xs: 12 }}>
                <Box
                  ref={(el) => (aboutCardsRef.current[2] = el)}
                  sx={styles.card}
                >
                  <Box sx={styles.cardHeader}>
                    <EmojiEvents sx={styles.cardIcon} />
                    <Typography sx={styles.cardTitle}>
                      Training & Certification
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: "#D1D5DB",
                      marginBottom: "8px",
                      fontWeight: 600,
                    }}
                  >
                    Full Stack Development - JBS Technology
                  </Typography>
                  <Typography
                    sx={{
                      color: "#9CA3AF",
                      fontSize: "0.875rem",
                      marginBottom: "16px",
                    }}
                  >
                    Comprehensive hands-on training covering React, Node.js,
                    Express, MongoDB, and modern development practices including
                    Git version control.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Skills Section */}
        <Box id="skills" sx={styles.skillsSection}>
          <Container maxWidth="lg">
            <Typography sx={styles.sectionTitle}>My Skills</Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "1.125rem",
                color: "#9CA3AF",
                marginBottom: "48px",
              }}
            >
              Here's a quick overview of the technologies and tools I work with.
            </Typography>
            <Grid container spacing={3}>
              {skillsData.map((skill, index) => (
                <Grid size={{ xs: 12, md: 6, lg: 3 }} key={index}>
                  <Box
                    ref={(el) => (skillCardsRef.current[index] = el)}
                    onMouseEnter={() => setHoveredSkill(index)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    sx={styles.skillCard}
                  >
                    <Box sx={styles.skillCardInner(hoveredSkill === index)}>
                      {/* Front */}
                      <Box
                        sx={{
                          ...styles.skillCardFace,
                          ...styles.skillCardFront,
                        }}
                      >
                        <Box sx={{ color: "#00FFFF", marginBottom: "16px" }}>
                          {skill.icon}
                        </Box>
                        <Typography
                          sx={{
                            fontSize: "1.25rem",
                            fontWeight: 700,
                            color: "#00FFFF",
                          }}
                        >
                          {skill.category}
                        </Typography>
                      </Box>

                      {/* Back */}
                      <Box
                        sx={{
                          ...styles.skillCardFace,
                          ...styles.skillCardBack,
                        }}
                      >
                        <List sx={{ marginTop: "16px", padding: 0 }}>
                          {skill.skills.map((item, idx) => (
                            <ListItem
                              key={idx}
                              sx={{
                                paddingBottom: "8px",
                                borderBottom: "1px solid #374151",
                                fontSize: "0.875rem",
                                color: idx % 2 === 0 ? "#00FFFF" : "#CCCCCC",
                                padding: "8px 0",
                              }}
                            >
                              {item}
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Projects Section */}
        <Box id="projects" sx={styles.projectsSection}>
          <Container maxWidth="lg">
            <Typography sx={styles.sectionTitle}>My Projects</Typography>
            <Grid container spacing={4}>
              {projects.map((project, index) => (
                <Grid size={{ xs: 12 }} key={index}>
                  <Box
                    ref={(el) => (projectCardsRef.current[index] = el)}
                    sx={styles.projectCard}
                  >
                    <Box sx={styles.projectHeader}>
                      {project.liveUrl && (
                        <Box sx={{ marginBottom: "24px" }}>
                          <Button
                            component="a"
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            sx={{
                              ...styles.outlineButton,
                              width: "fit-content",
                            }}
                          >
                            Live Demo (Vercel)
                          </Button>
                        </Box>
                      )}

                      <Box>
                        <Typography
                          sx={{
                            fontSize: "1.875rem",
                            fontWeight: 700,
                            marginBottom: "8px",
                            color: "#00FFFF",
                          }}
                        >
                          {project.title}
                        </Typography>
                        <Typography
                          sx={{ fontSize: "1.25rem", color: "#D1D5DB" }}
                        >
                          {project.subtitle}
                        </Typography>
                      </Box>
                      <Chip
                        label="Full Stack Project"
                        sx={styles.projectChip}
                      />
                    </Box>

                    <Typography sx={{ color: "#D1D5DB", marginBottom: "24px" }}>
                      {project.description}
                    </Typography>

                    <Grid
                      container
                      spacing={2}
                      sx={{ marginBottom: "24px" }}
                      alignItems="stretch"
                    >
                      <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                          sx={{
                            ...styles.projectFeatureBox,
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <Typography
                            sx={{
                              fontWeight: 700,
                              marginBottom: "8px",
                              color: "#00FFFF",
                            }}
                          >
                            Key Features
                          </Typography>
                          <List
                            sx={{
                              fontSize: "0.875rem",
                              color: "#D1D5DB",
                              padding: 0,
                            }}
                          >
                            {project.features.map((feature, idx) => (
                              <ListItem key={idx} sx={{ padding: "4px 0" }}>
                                • {feature}
                              </ListItem>
                            ))}
                          </List>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                          sx={{
                            ...styles.projectFeatureBox,
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <Typography
                            sx={{
                              fontWeight: 700,
                              marginBottom: "8px",
                              color: "#00FFFF",
                            }}
                          >
                            Technologies Used
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              flexWrap: "wrap",
                              gap: "8px",
                            }}
                          >
                            {project.tech.map((tech, idx) => (
                              <Chip
                                key={idx}
                                label={tech}
                                sx={styles.techChip}
                              />
                            ))}
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Contact Section */}
        <Box id="contact" sx={styles.contactSection}>
          <Container ref={contactRef} maxWidth="lg">
            <Typography sx={styles.sectionTitle}>Get In Touch</Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "1.125rem",
                color: "#9CA3AF",
                marginBottom: "48px",
              }}
            >
              I'd love to hear from you. Fill out the form or reach out via the
              contact info below!
            </Typography>

            <Grid container spacing={4} sx={{ marginBottom: "48px" }}>
              {/* Contact Form */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={styles.card}>
                  <Box
                    component="form"
                    onSubmit={handleFormSubmit}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                    }}
                  >
                    <TextField
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      fullWidth
                      sx={styles.contactInput}
                    />
                    <TextField
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      fullWidth
                      sx={styles.contactInput}
                    />
                    <TextField
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleFormChange}
                      required
                      fullWidth
                      sx={styles.contactInput}
                    />
                    <TextField
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleFormChange}
                      required
                      fullWidth
                      multiline
                      rows={5}
                      sx={styles.contactInput}
                    />
                    <Button type="submit" fullWidth sx={styles.outlineButton}>
                      Send Message
                    </Button>
                  </Box>
                </Box>
              </Grid>
              {/* Contact Info */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={styles.card}>
                  <Typography
                    sx={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      marginBottom: "24px",
                      color: "#00FFFF",
                    }}
                  >
                    Contact Information
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                      }}
                    >
                      <Mail sx={{ color: "#00FFFF" }} />
                      <Typography>mkukadiya001@gmail.com</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                      }}
                    >
                      <Phone sx={{ color: "#00FFFF" }} />
                      <Typography>+91 79908 56214</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                      }}
                    >
                      <LocationOn sx={{ color: "#00FFFF" }} />
                      <Typography>Surat, Gujarat, India</Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Footer */}
        <Box component="footer" sx={styles.footer}>
          <Container maxWidth="lg">
            <Grid container spacing={4} sx={{ marginBottom: "32px" }}>
              <Grid size={{ xs: 12, md: 3 }}>
                <Typography
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#00FFFF",
                    marginBottom: "16px",
                  }}
                >
                  Mihir Kukadiya
                </Typography>
                <Typography sx={{ color: "#9CA3AF", fontSize: "0.875rem" }}>
                  I'm a passionate full-stack developer with experience in
                  building modern, responsive web applications.
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 3 }}>
                <Typography
                  sx={{
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    color: "#00FFFF",
                    marginBottom: "16px",
                  }}
                >
                  Quick Links
                </Typography>
                <List sx={{ padding: 0 }}>
                  {["home", "about", "skills", "projects", "contact"].map(
                    (section) => (
                      <ListItem key={section} sx={{ padding: "4px 0" }}>
                        <Button
                          onClick={() => scrollToSection(section)}
                          sx={{
                            color: "#9CA3AF",
                            textTransform: "capitalize",
                            fontSize: "0.875rem",
                            padding: 0,
                            minWidth: "auto",
                            "&:hover": { color: "#00FFFF" },
                          }}
                        >
                          {section === "about" ? "About Us" : section}
                        </Button>
                      </ListItem>
                    )
                  )}
                </List>
              </Grid>

              <Grid size={{ xs: 12, md: 3 }}>
                <Typography
                  sx={{
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    color: "#00FFFF",
                    marginBottom: "16px",
                  }}
                >
                  Contact
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    fontSize: "0.875rem",
                    color: "#9CA3AF",
                  }}
                >
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                  >
                    <Mail sx={{ fontSize: 16, color: "#00FFFF" }} />
                    <Typography sx={{ fontSize: "0.875rem" }}>
                      mkukadiya001@gmail.com
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                  >
                    <Phone sx={{ fontSize: 16, color: "#00FFFF" }} />
                    <Typography sx={{ fontSize: "0.875rem" }}>
                      +91 79908 56214
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                  >
                    <LocationOn sx={{ fontSize: 16, color: "#00FFFF" }} />
                    <Typography sx={{ fontSize: "0.875rem" }}>
                      Surat, Gujarat, India
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 3 }}>
                <Typography
                  sx={{
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    color: "#00FFFF",
                    marginBottom: "16px",
                  }}
                >
                  Follow Me
                </Typography>
                <Box sx={{ display: "flex", gap: "16px" }}>
                  <IconButton
                    component="a"
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={styles.socialButton}
                  >
                    <GitHub />
                  </IconButton>

                  <IconButton
                    component="a"
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={styles.socialButton}
                  >
                    <LinkedIn />
                  </IconButton>

                  <IconButton
                    component="a"
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={styles.socialButton}
                  >
                    <WhatsApp />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>

            <Box
              sx={{
                borderTop: "1px solid #1F2937",
                paddingTop: "32px",
                textAlign: "center",
              }}
            >
              <Typography sx={{ color: "#6B7280", fontSize: "0.875rem" }}>
                © {new Date().getFullYear()} Mihir Kukadiya. All rights
                reserved.
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>

      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
      `}</style>
    </ThemeProvider>
  );
}
