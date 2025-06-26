"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  Leaf,
  Truck,
  Heart,
  ArrowRight,
  CheckCircle,
  Users,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  X,
  Recycle,
  Factory,
  Home,
  Utensils,
  Zap,
  TreePine,
  Wind,
  Star,
  Award,
  Shield,
} from "lucide-react"
import { useState, useEffect } from "react"

export default function HomePage() {
  // util to turn "Nossa Solução" → "nossa-solucao"
  const slugify = (str: string) =>
    str
      .toLowerCase()
      .normalize("NFD") // separate accents
      .replace(/[\u0300-\u036f]/g, "") // remove accents
      .replace(/\s+/g, "-") // spaces → dash

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const { scrollYProgress } = useScroll()

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const floatingAnimation = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const pulseAnimation = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const plans = [
    {
      name: "Avulso",
      price: "3.500 Kz",
      botijao: "Botijão 6kg",
      assinatura: "-",
      biofertilizante: "-",
      popular: false,
      color: "from-gray-100 to-gray-200",
    },
    {
      name: "EcoFamília",
      price: "3.200 Kz",
      botijao: "Botijão 6kg",
      assinatura: "12.800 Kz/mês (4 botijões)",
      biofertilizante: "1 saco grátis",
      popular: true,
      color: "from-orange-100 to-orange-200",
    },
    {
      name: "EcoNegócio",
      price: "2.900 Kz",
      botijao: "Botijão 6kg",
      assinatura: "58.000 Kz/mês (20 botijões)",
      biofertilizante: "5 sacos grátis",
      popular: false,
      color: "from-green-100 to-green-200",
    },
  ]

  const steps = [
    {
      title: "Coleta",
      description: "Resíduos de fazendas e mercados",
      icon: Recycle,
      color: "#2E8B57",
      delay: 0,
    },
    {
      title: "Transformação",
      description: "Biodigestores produzem biometano",
      icon: Factory,
      color: "#FF6B35",
      delay: 0.2,
    },
    {
      title: "Distribuição",
      description: "Botijões entregues na sua porta",
      icon: Truck,
      color: "#2E8B57",
      delay: 0.4,
    },
    {
      title: "Uso",
      description: "Cozinhe com energia 100% renovável",
      icon: Utensils,
      color: "#FF6B35",
      delay: 0.6,
    },
  ]

  const testimonials = [
    {
      name: "Maria Santos",
      role: "Dona de Casa",
      text: "O EcoGás mudou nossa vida! Economizamos 40% na conta de gás e ainda ajudamos o meio ambiente.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616c9c0e8e5?w=80&h=80&fit=crop&crop=face",
    },
    {
      name: "João Ferreira",
      role: "Restaurante Popular",
      text: "Delivery rápido e preço justo. Nossos clientes adoram saber que usamos energia limpa!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    },
    {
      name: "Ana Costa",
      role: "Padaria Familiar",
      text: "Qualidade excelente e suporte 24h. Recomendo para todos os comerciantes!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    },
  ]

  const features = [
    { icon: Shield, text: "100% Seguro", color: "#2E8B57" },
    { icon: Zap, text: "Energia Limpa", color: "#FF6B35" },
    { icon: TreePine, text: "Sustentável", color: "#2E8B57" },
    { icon: Award, text: "Certificado", color: "#FF6B35" },
  ]

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-20 left-10 w-32 h-32 bg-green-200/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -180, -360],
          }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-orange-200/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-300/30 rounded-full blur-lg"
        />
      </div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-[#2E8B57]/95 backdrop-blur-lg text-white sticky top-0 z-40 shadow-2xl"
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
              >
                <Leaf className="w-6 h-6 text-[#2E8B57]" />
              </motion.div>
              <div>
                <h1 className="text-xl font-bold font-display">EcoGás</h1>
                <p className="text-sm opacity-90">Sinergia Natural</p>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["Início", "Nossa Solução", "Como Funciona", "Planos", "Contato"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${slugify(item)}`}
                  className="relative hover:text-[#FF6B35] transition-colors cursor-pointer"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6B35]"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button className="md:hidden" whileTap={{ scale: 0.9 }} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-4 pb-4 border-t border-white/20"
              >
                <div className="flex flex-col space-y-4 mt-4">
                  {["Início", "Nossa Solução", "Como Funciona", "Planos", "Contato"].map((item, index) => (
                    <motion.a
                      key={item}
                      href={`#${slugify(item)}`}
                      className="hover:text-[#FF6B35] transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-orange-50"
          style={{ y: backgroundY }}
        />

        {/* Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-4 h-4 rounded-full ${i % 2 === 0 ? "bg-green-300/40" : "bg-orange-300/40"}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="flex items-center space-x-2 mb-6"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center space-x-1 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg"
                  >
                    <feature.icon className="w-4 h-4" style={{ color: feature.color }} />
                    <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.h1
                className="text-4xl md:text-6xl font-display font-bold text-[#333333] mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <motion.span
                  animate={{ color: ["#333333", "#2E8B57", "#333333"] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  Energia limpa
                </motion.span>{" "}
                que vem da terra,{" "}
                <motion.span
                  className="text-[#2E8B57]"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  direto para sua casa.
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-xl text-[#666666] mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Transformamos resíduos orgânicos em biogás sustentável, oferecendo uma alternativa{" "}
                <motion.span
                  animate={{ color: ["#666666", "#FF6B35", "#666666"] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="font-semibold"
                >
                  econômica e ecológica
                </motion.span>{" "}
                para sua família ou negócio.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(255, 107, 53, 0.3)",
                    y: -5,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#FF6B35] to-[#e55a2b] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center space-x-2 shadow-xl relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#e55a2b] to-[#FF6B35] opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  />
                  <span className="relative z-10">Peça Agora</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    className="relative z-10"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(46, 139, 87, 0.3)",
                    y: -5,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#2E8B57] to-[#267a4a] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center space-x-2 shadow-xl relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#267a4a] to-[#2E8B57] opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  />
                  <span className="relative z-10">Seja um Parceiro</span>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="relative z-10"
                  >
                    <Users className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative"
            >
              <motion.div
                {...floatingAnimation}
                className="bg-white p-8 rounded-3xl shadow-2xl relative overflow-hidden"
              >
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#2E8B57]/20 to-[#FF6B35]/20 rounded-full -translate-y-16 translate-x-16"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />

                <motion.img
                  src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=500&h=400&fit=crop&crop=center"
                  alt="Família angolana feliz cozinhando com botijão EcoGás"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  className="mt-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  <h3 className="text-xl font-bold text-[#333333] mb-2">Família EcoGás</h3>
                  <p className="text-[#666666]">Cozinhando com energia 100% sustentável</p>

                  <motion.div
                    className="flex justify-center space-x-1 mt-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.3 + i * 0.1 }}
                      >
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="absolute -top-4 -left-4 bg-[#2E8B57] text-white p-4 rounded-2xl shadow-xl"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <div className="text-2xl font-bold">30%</div>
                  <div className="text-sm opacity-90">Mais Barato</div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.7, duration: 0.6 }}
                className="absolute -bottom-4 -right-4 bg-[#FF6B35] text-white p-4 rounded-2xl shadow-xl"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                >
                  <div className="text-2xl font-bold">24h</div>
                  <div className="text-sm opacity-90">Entrega</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-[#2E8B57]/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-[#2E8B57] rounded-full mt-2"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </motion.div>
      </section>

      {/* Nossa Solução */}
      <section id="nossa-solucao" className="py-20 bg-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-green-50/50 to-orange-50/50"
          initial={{ x: "-100%" }}
          whileInView={{ x: "0%" }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl md:text-5xl font-display font-bold text-[#333333] mb-6"
              whileInView={{ scale: [0.9, 1.05, 1] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Nossa Solução
            </motion.h2>
            <motion.p
              className="text-xl text-[#666666] max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Oferecemos uma alternativa sustentável e econômica ao gás tradicional
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Leaf,
                title: "Biogás Sustentável",
                description:
                  "Transformamos estrume e resíduos em gás limpo e acessível, reduzindo o impacto ambiental.",
                color: "#2E8B57",
                image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop&crop=center",
                gradient: "from-green-50 to-green-100",
              },
              {
                icon: Truck,
                title: "Delivery Rápido",
                description: "Entregamos em 24h via app ou WhatsApp, com rastreamento em tempo real.",
                color: "#FF6B35",
                image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop&crop=center",
                gradient: "from-orange-50 to-orange-100",
              },
              {
                icon: Heart,
                title: "Impacto Social",
                description: "Reduzimos desmatamento e criamos empregos verdes em comunidades locais.",
                color: "#2E8B57",
                image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop&crop=center",
                gradient: "from-green-50 to-orange-50",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                }}
                className={`bg-gradient-to-br ${item.gradient} p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-300 relative overflow-hidden group cursor-pointer`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />

                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10"
                  style={{ backgroundColor: item.color }}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>

                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-32 object-cover rounded-xl mb-4 shadow-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />

                <h3 className="text-2xl font-bold text-[#333333] mb-4 relative z-10">{item.title}</h3>
                <p className="text-[#666666] relative z-10">{item.description}</p>

                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${item.color}, ${item.color}80)`,
                  }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="py-20 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl md:text-5xl font-display font-bold text-[#333333] mb-6"
              whileInView={{
                backgroundImage: [
                  "linear-gradient(45deg, #333333, #333333)",
                  "linear-gradient(45deg, #2E8B57, #FF6B35)",
                  "linear-gradient(45deg, #333333, #333333)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              viewport={{ once: true }}
            >
              Como Funciona
            </motion.h2>
            <p className="text-xl text-[#666666] max-w-3xl mx-auto">
              Um processo simples e sustentável do resíduo até sua casa
            </p>
          </motion.div>

          <div className="relative">
            {/* Animated Timeline Line */}
            <motion.div
              className="hidden md:block absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-[#2E8B57] via-[#FF6B35] to-[#2E8B57] transform -translate-y-1/2 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
            />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: step.delay,
                    type: "spring",
                    stiffness: 100,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -15,
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
                  }}
                  className="relative group cursor-pointer"
                >
                  <motion.div
                    className="bg-white p-6 rounded-2xl shadow-lg text-center relative z-10 overflow-hidden"
                    whileHover={{ backgroundColor: "#fafafa" }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 3,
                      }}
                    />

                    <motion.div
                      whileHover={{
                        rotate: [0, -10, 10, -10, 0],
                        scale: 1.2,
                      }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl relative z-10"
                      style={{ backgroundColor: step.color }}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <motion.img
                      src={`https://images.unsplash.com/photo-${
                        index === 0
                          ? "1544717297-fa95b6ee9643" // Crianças africanas
                          : index === 1
                            ? "1582213782179-e0d53f98f2ca" // Pessoas trabalhando
                            : index === 2
                              ? "1488521787991-ed7bbaae773c" // Família africana
                              : "1609220136736-443140cffec6" // Crianças cozinhando
                      }?w=300&h=200&fit=crop&crop=center`}
                      alt={step.title}
                      className="w-full h-24 object-cover rounded-lg mb-4 shadow-md"
                      whileHover={{ scale: 1.1, rotateZ: 2 }}
                      transition={{ duration: 0.3 }}
                    />

                    <h3 className="text-xl font-bold text-[#333333] mb-2 relative z-10">{step.title}</h3>
                    <p className="text-[#666666] relative z-10">{step.description}</p>
                  </motion.div>

                  {/* Animated Step Number */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg z-20 shadow-lg"
                    style={{ backgroundColor: step.color }}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: step.delay + 0.3,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 200,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                    }}
                  >
                    {index + 1}
                  </motion.div>

                  {/* Connecting Arrow */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-30"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: step.delay + 0.5, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center"
                      >
                        <ArrowRight className="w-4 h-4 text-[#FF6B35]" />
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#333333] mb-6">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-[#666666] max-w-3xl mx-auto">
              Histórias reais de famílias e negócios que escolheram a energia limpa
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.8 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-green-50 to-orange-50 p-8 md:p-12 rounded-3xl shadow-2xl text-center relative overflow-hidden"
              >
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2E8B57] to-[#FF6B35]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 4 }}
                />

                <motion.img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full mx-auto mb-6 shadow-lg border-4 border-white"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                />

                <motion.div
                  className="flex justify-center space-x-1 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                    >
                      <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </motion.div>

                <motion.p
                  className="text-xl text-[#333333] mb-6 italic font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  "{testimonials[currentTestimonial].text}"
                </motion.p>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                  <h4 className="text-lg font-bold text-[#2E8B57]">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-[#666666]">{testimonials[currentTestimonial].role}</p>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? "bg-[#2E8B57] w-8" : "bg-gray-300"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Planos e Preços */}
      <section id="planos" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl md:text-5xl font-display font-bold text-[#333333] mb-6"
              whileInView={{ scale: [0.9, 1.05, 1] }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Planos e Preços
            </motion.h2>
            <p className="text-xl text-[#666666] max-w-3xl mx-auto">
              Escolha o plano ideal para sua família ou negócio
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -20,
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 30px 60px rgba(0,0,0,0.2)",
                }}
                className={`relative bg-gradient-to-br ${plan.color} rounded-3xl shadow-xl p-8 overflow-hidden group cursor-pointer ${
                  plan.popular ? "ring-4 ring-[#FF6B35] scale-105" : ""
                }`}
              >
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(255,255,255,0.1), transparent)",
                      "linear-gradient(225deg, rgba(255,255,255,0.2), transparent)",
                      "linear-gradient(45deg, rgba(255,255,255,0.1), transparent)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />

                {plan.popular && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.span
                      className="bg-gradient-to-r from-[#FF6B35] to-[#e55a2b] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      ⭐ Mais Popular
                    </motion.span>
                  </motion.div>
                )}

                <motion.div
                  className="text-center mb-8 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.h3
                    className="text-2xl font-bold text-[#333333] mb-4"
                    whileHover={{ scale: 1.1, color: plan.popular ? "#FF6B35" : "#2E8B57" }}
                  >
                    {plan.name}
                  </motion.h3>

                  <motion.div
                    className="text-5xl font-bold mb-2"
                    style={{ color: plan.popular ? "#FF6B35" : "#2E8B57" }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                  >
                    {plan.price}
                  </motion.div>

                  <p className="text-[#666666] font-medium">{plan.botijao}</p>
                </motion.div>

                <motion.div
                  className="space-y-4 mb-8 relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.6 }}
                  viewport={{ once: true }}
                >
                  {[
                    `Assinatura: ${plan.assinatura}`,
                    `Biofertilizante: ${plan.biofertilizante}`,
                    "Entrega em 24h",
                    "Suporte via WhatsApp",
                  ].map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 + 0.7 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.3 }}>
                        <CheckCircle className="w-5 h-5 text-[#2E8B57]" />
                      </motion.div>
                      <span className="text-[#666666]">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-full font-bold text-lg transition-all duration-300 relative overflow-hidden group/btn ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#FF6B35] to-[#e55a2b] text-white shadow-lg"
                      : "bg-gradient-to-r from-[#2E8B57] to-[#267a4a] text-white shadow-lg"
                  }`}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 3,
                    }}
                  />
                  <span className="relative z-10">Quero Assinar</span>
                </motion.button>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 rounded-full opacity-20"
                  style={{ backgroundColor: plan.popular ? "#FF6B35" : "#2E8B57" }}
                  animate={{
                    scale: [1, 1.5, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parceiros e Impacto */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-orange-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl md:text-5xl font-display font-bold text-[#333333] mb-6"
              whileInView={{
                textShadow: [
                  "0 0 0px rgba(46, 139, 87, 0)",
                  "0 0 20px rgba(46, 139, 87, 0.5)",
                  "0 0 0px rgba(46, 139, 87, 0)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              viewport={{ once: true }}
            >
              Nosso Impacto
            </motion.h2>
            <p className="text-xl text-[#666666] max-w-3xl mx-auto">Transformando vidas e o meio ambiente em Angola</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { number: "+500", label: "Famílias Atendidas", icon: Users, color: "#2E8B57" },
              { number: "10 ton", label: "CO₂ Evitadas/Mês", icon: Wind, color: "#FF6B35" },
              { number: "15", label: "Fazendas Parceiras", icon: TreePine, color: "#2E8B57" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  rotateY: 10,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                }}
                className="bg-white p-8 rounded-2xl shadow-xl text-center relative overflow-hidden group cursor-pointer"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />

                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                  style={{ backgroundColor: stat.color }}
                  whileHover={{
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.2,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>

                <motion.div
                  className="text-4xl font-bold mb-2 relative z-10"
                  style={{ color: stat.color }}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.5,
                  }}
                >
                  {stat.number}
                </motion.div>

                <p className="text-[#666666] font-semibold relative z-10">{stat.label}</p>

                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${stat.color}, ${stat.color}80)`,
                  }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: index * 0.3, duration: 1 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap justify-center items-center gap-8">
              {["Ministério do Ambiente", "Fazenda Verde", "ONG EcoAngola", "Banco Mundial", "União Europeia"].map(
                (partner, index) => (
                  <motion.div
                    key={index}
                    className="bg-white px-6 py-3 rounded-lg shadow-lg opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 0.7, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-[#666666] font-semibold">{partner}</span>
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-[#2E8B57] text-white py-16 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#2E8B57] via-[#267a4a] to-[#1e5f3f]"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Logo e Descrição */}
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div className="flex items-center space-x-3 mb-6" whileHover={{ scale: 1.05 }}>
                <motion.div
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Leaf className="w-6 h-6 text-[#2E8B57]" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold font-display">EcoGás Sinergia Natural</h3>
                  <p className="text-sm opacity-90">Energia limpa para um futuro sustentável</p>
                </div>
              </motion.div>

              <motion.p
                className="text-white/80 mb-6 max-w-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                Transformamos resíduos em energia limpa, oferecendo uma alternativa sustentável e econômica para
                famílias e negócios em Angola.
              </motion.p>

              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Linkedin, href: "#" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-[#FF6B35] transition-colors"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links Úteis */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold mb-4">Links Úteis</h4>
              <ul className="space-y-2 text-white/80">
                {[
                  { text: "App Delivery", href: "#" },
                  { text: "Trabalhe Conosco", href: "#" },
                  { text: "FAQ", href: "#" },
                  { text: "Blog", href: "#" },
                ].map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.a href={link.href} className="hover:text-[#FF6B35] transition-colors" whileHover={{ x: 5 }}>
                      {link.text}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contato */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold mb-4">Contato</h4>
              <div className="space-y-3 text-white/80">
                {[
                  { icon: Phone, text: "+244 926 283 434" },
                  { icon: Mail, text: "contato@ecogas.co.ao" },
                  { icon: Home, text: "Luanda, Angola" },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5, color: "#FF6B35" }}
                  >
                    <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.3 }}>
                      <contact.icon className="w-4 h-4" />
                    </motion.div>
                    <span>{contact.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Selos */}
          <motion.div
            className="border-t border-white/20 pt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
                {["Energia 100% Sustentável", "Apoiado pelo Ministério do Ambiente"].map((selo, index) => (
                  <motion.span
                    key={index}
                    className="bg-white/20 px-4 py-2 rounded-full text-sm backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255, 107, 53, 0.2)",
                    }}
                  >
                    {selo}
                  </motion.span>
                ))}
              </div>

              <motion.p
                className="text-white/60 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                &copy; 2025 EcoGás Sinergia Natural. Todos os direitos reservados.
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </footer>
    </main>
  )
}
