/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Building2,
  Users,
  Code2,
  Briefcase,
  Cpu,
  Coins,
  Activity,
  Car,
  Radio,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  ChevronRight,
  ChevronDown,
  ChevronLeft,
  CheckCircle2,
  Check,
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  Globe2,
  Clock,
  Shield,
  Award,
  Target,
  Database,
  Search,
  FileText,
  Download,
  Sparkles,
  UploadCloud,
  MessageCircle,
  BarChart2,
  Facebook,
  Lock,
  Rocket,
  Send,
  Star,
  TrendingUp,
  Trophy,
  Zap,
  Quote,
  Calendar,
  Copy,
  Link2,
  Share2,
  Twitter,
  ArrowLeft,
  List,
  LucideProps
} from 'lucide-react';

interface LucideIconProps extends Omit<LucideProps, 'ref'> {
  name: string;
}

export const LucideIcon: React.FC<LucideIconProps> = ({ name, ...props }) => {
  switch (name) {
    case 'Building2': return <Building2 {...props} />;
    case 'Users': return <Users {...props} />;
    case 'Code2': return <Code2 {...props} />;
    case 'Briefcase': return <Briefcase {...props} />;
    case 'Cpu': return <Cpu {...props} />;
    case 'Coins': return <Coins {...props} />;
    case 'Activity': return <Activity {...props} />;
    case 'Car': return <Car {...props} />;
    case 'Radio': return <Radio {...props} />;
    case 'MapPin': return <MapPin {...props} />;
    case 'Mail': return <Mail {...props} />;
    case 'Phone': return <Phone {...props} />;
    case 'Linkedin': return <Linkedin {...props} />;
    case 'ChevronRight': return <ChevronRight {...props} />;
    case 'ChevronDown': return <ChevronDown {...props} />;
    case 'ChevronLeft': return <ChevronLeft {...props} />;
    case 'CheckCircle2': return <CheckCircle2 {...props} />;
    case 'Check': return <Check {...props} />;
    case 'ArrowUpRight': return <ArrowUpRight {...props} />;
    case 'ArrowRight': return <ArrowRight {...props} />;
    case 'Menu': return <Menu {...props} />;
    case 'X': return <X {...props} />;
    case 'Globe2': return <Globe2 {...props} />;
    case 'Clock': return <Clock {...props} />;
    case 'Shield': return <Shield {...props} />;
    case 'Award': return <Award {...props} />;
    case 'Target': return <Target {...props} />;
    case 'Database': return <Database {...props} />;
    case 'Search': return <Search {...props} />;
    case 'FileText': return <FileText {...props} />;
    case 'Download': return <Download {...props} />;
    case 'Sparkles': return <Sparkles {...props} />;
    case 'UploadCloud': return <UploadCloud {...props} />;
    case 'MessageCircle': return <MessageCircle {...props} />;
    case 'BarChart2': return <BarChart2 {...props} />;
    case 'Facebook': return <Facebook {...props} />;
    case 'Lock': return <Lock {...props} />;
    case 'Rocket': return <Rocket {...props} />;
    case 'Send': return <Send {...props} />;
    case 'Star': return <Star {...props} />;
    case 'TrendingUp': return <TrendingUp {...props} />;
    case 'Trophy': return <Trophy {...props} />;
    case 'Zap': return <Zap {...props} />;
    case 'Quote': return <Quote {...props} />;
    case 'Calendar': return <Calendar {...props} />;
    case 'Copy': return <Copy {...props} />;
    case 'Link2': return <Link2 {...props} />;
    case 'Share2': return <Share2 {...props} />;
    case 'Twitter': return <Twitter {...props} />;
    case 'ArrowLeft': return <ArrowLeft {...props} />;
    case 'List': return <List {...props} />;
    default: return <Sparkles {...props} />;
  }
};

export default LucideIcon;
