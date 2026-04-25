-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : jeu. 23 avr. 2026 à 07:57
-- Version du serveur : 8.0.31
-- Version de PHP : 8.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `pays`
--

-- --------------------------------------------------------

--
-- Structure de la table `pays`
--

DROP TABLE IF EXISTS `pays`;
CREATE TABLE IF NOT EXISTS `pays` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `alpha_3_code` varchar(3) COLLATE utf8mb4_general_ci NOT NULL,
  `capital` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `region` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `population` bigint NOT NULL,
  `flag` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `borders` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=165 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `pays`
--

INSERT INTO `pays` (`id`, `name`, `alpha_3_code`, `capital`, `region`, `population`, `flag`, `borders`) VALUES
(1, 'Afghanistan', 'AFG', 'Kabul', 'Asia', 40218234, 'https://flagcdn.com/af.svg', 'IRN, PAK, TKM, UZB, TJK, CHN'),
(2, 'Albania', 'ALB', 'Tirana', 'Europe', 2837743, 'https://flagcdn.com/al.svg', 'MNE, GRC, MKD, UNK'),
(3, 'Algeria', 'DZA', 'Algiers', 'Africa', 44700000, 'https://flagcdn.com/dz.svg', 'TUN, LBY, NER, ESH, MRT, MLI, MAR'),
(4, 'Andorra', 'AND', 'Andorra la Vella', 'Europe', 77265, 'https://flagcdn.com/ad.svg', 'FRA, ESP'),
(5, 'Angola', 'AGO', 'Luanda', 'Africa', 32866268, 'https://flagcdn.com/ao.svg', 'COG, COD, ZMB, NAM'),
(6, 'Argentina', 'ARG', 'Buenos Aires', 'Americas', 45376763, 'https://flagcdn.com/ar.svg', 'BOL, BRA, CHL, PRY, URY'),
(7, 'Armenia', 'ARM', 'Yerevan', 'Asia', 2963234, 'https://flagcdn.com/am.svg', 'AZE, GEO, IRN, TUR'),
(8, 'Austria', 'AUT', 'Vienna', 'Europe', 8917205, 'https://flagcdn.com/at.svg', 'CZE, DEU, HUN, ITA, LIE, SVK, SVN, CHE'),
(9, 'Azerbaijan', 'AZE', 'Baku', 'Asia', 10110116, 'https://flagcdn.com/az.svg', 'ARM, GEO, IRN, RUS, TUR'),
(10, 'Bangladesh', 'BGD', 'Dhaka', 'Asia', 164689383, 'https://flagcdn.com/bd.svg', 'MMR, IND'),
(11, 'Belarus', 'BLR', 'Minsk', 'Europe', 9398861, 'https://flagcdn.com/by.svg', 'LVA, LTU, POL, RUS, UKR'),
(12, 'Belgium', 'BEL', 'Brussels', 'Europe', 11555997, 'https://flagcdn.com/be.svg', 'FRA, DEU, LUX, NLD'),
(13, 'Belize', 'BLZ', 'Belmopan', 'Americas', 397621, 'https://flagcdn.com/bz.svg', 'GTM, MEX'),
(14, 'Benin', 'BEN', 'Porto-Novo', 'Africa', 12123198, 'https://flagcdn.com/bj.svg', 'BFA, NER, NGA, TGO'),
(15, 'Bhutan', 'BTN', 'Thimphu', 'Asia', 771612, 'https://flagcdn.com/bt.svg', 'CHN, IND'),
(16, 'Bolivia (Plurinational State of)', 'BOL', 'Sucre', 'Americas', 11673029, 'https://flagcdn.com/bo.svg', 'ARG, BRA, CHL, PRY, PER'),
(17, 'Bosnia and Herzegovina', 'BIH', 'Sarajevo', 'Europe', 3280815, 'https://flagcdn.com/ba.svg', 'HRV, MNE, SRB'),
(18, 'Botswana', 'BWA', 'Gaborone', 'Africa', 2351625, 'https://flagcdn.com/bw.svg', 'NAM, ZAF, ZMB, ZWE'),
(19, 'Brazil', 'BRA', 'Brasília', 'Americas', 212559409, 'https://flagcdn.com/br.svg', 'ARG, BOL, COL, FRA, GUF, GUY, PRY, PER, SUR, URY, VEN'),
(20, 'Brunei Darussalam', 'BRN', 'Bandar Seri Begawan', 'Asia', 437483, 'https://flagcdn.com/bn.svg', 'MYS'),
(21, 'Bulgaria', 'BGR', 'Sofia', 'Europe', 6927288, 'https://flagcdn.com/bg.svg', 'GRC, MKD, ROU, SRB, TUR'),
(22, 'Burkina Faso', 'BFA', 'Ouagadougou', 'Africa', 20903278, 'https://flagcdn.com/bf.svg', 'BEN, CIV, GHA, MLI, NER, TGO'),
(23, 'Burundi', 'BDI', 'Gitega', 'Africa', 11890781, 'https://flagcdn.com/bi.svg', 'COD, RWA, TZA'),
(24, 'Cambodia', 'KHM', 'Phnom Penh', 'Asia', 16718971, 'https://flagcdn.com/kh.svg', 'LAO, THA, VNM'),
(25, 'Cameroon', 'CMR', 'Yaoundé', 'Africa', 26545864, 'https://flagcdn.com/cm.svg', 'CAF, TCD, COG, GNQ, GAB, NGA'),
(26, 'Canada', 'CAN', 'Ottawa', 'Americas', 38005238, 'https://flagcdn.com/ca.svg', 'USA'),
(27, 'Central African Republic', 'CAF', 'Bangui', 'Africa', 4829764, 'https://flagcdn.com/cf.svg', 'CMR, TCD, COD, COG, SSD, SDN'),
(28, 'Chad', 'TCD', 'N\'Djamena', 'Africa', 16425859, 'https://flagcdn.com/td.svg', 'CMR, CAF, LBY, NER, NGA, SDN'),
(29, 'Chile', 'CHL', 'Santiago', 'Americas', 19116209, 'https://flagcdn.com/cl.svg', 'ARG, BOL, PER'),
(30, 'China', 'CHN', 'Beijing', 'Asia', 1402112000, 'https://flagcdn.com/cn.svg', 'AFG, BTN, MMR, HKG, IND, KAZ, PRK, KGZ, LAO, MAC, MNG, PAK, RUS, TJK, VNM, NPL'),
(31, 'Colombia', 'COL', 'Bogotá', 'Americas', 50882884, 'https://flagcdn.com/co.svg', 'BRA, ECU, PAN, PER, VEN'),
(32, 'Congo', 'COG', 'Brazzaville', 'Africa', 5518092, 'https://flagcdn.com/cg.svg', 'AGO, CMR, CAF, COD, GAB'),
(33, 'Congo (Democratic Republic of the)', 'COD', 'Kinshasa', 'Africa', 89561404, 'https://flagcdn.com/cd.svg', 'AGO, BDI, CAF, COG, RWA, SSD, TZA, UGA, ZMB'),
(34, 'Costa Rica', 'CRI', 'San José', 'Americas', 5094114, 'https://flagcdn.com/cr.svg', 'NIC, PAN'),
(35, 'Croatia', 'HRV', 'Zagreb', 'Europe', 4047200, 'https://flagcdn.com/hr.svg', 'BIH, HUN, MNE, SRB, SVN'),
(36, 'Cyprus', 'CYP', 'Nicosia', 'Europe', 1207361, 'https://flagcdn.com/cy.svg', 'GBR'),
(37, 'Denmark', 'DNK', 'Copenhagen', 'Europe', 5831404, 'https://flagcdn.com/dk.svg', 'DEU'),
(38, 'Djibouti', 'DJI', 'Djibouti', 'Africa', 988002, 'https://flagcdn.com/dj.svg', 'ERI, ETH, SOM'),
(39, 'Dominican Republic', 'DOM', 'Santo Domingo', 'Americas', 10847904, 'https://flagcdn.com/do.svg', 'HTI'),
(40, 'Ecuador', 'ECU', 'Quito', 'Americas', 17643060, 'https://flagcdn.com/ec.svg', 'COL, PER'),
(41, 'Egypt', 'EGY', 'Cairo', 'Africa', 102334403, 'https://flagcdn.com/eg.svg', 'ISR, LBY, SDN'),
(42, 'El Salvador', 'SLV', 'San Salvador', 'Americas', 6486201, 'https://flagcdn.com/sv.svg', 'GTM, HND'),
(43, 'Equatorial Guinea', 'GNQ', 'Malabo', 'Africa', 1402985, 'https://flagcdn.com/gq.svg', 'CMR, GAB'),
(44, 'Eritrea', 'ERI', 'Asmara', 'Africa', 5352000, 'https://flagcdn.com/er.svg', 'DJI, ETH, SDN'),
(45, 'Estonia', 'EST', 'Tallinn', 'Europe', 1331057, 'https://flagcdn.com/ee.svg', 'LVA, RUS'),
(46, 'Ethiopia', 'ETH', 'Addis Ababa', 'Africa', 114963583, 'https://flagcdn.com/et.svg', 'DJI, ERI, KEN, SOM, SSD, SDN'),
(47, 'Finland', 'FIN', 'Helsinki', 'Europe', 5530719, 'https://flagcdn.com/fi.svg', 'NOR, SWE, RUS'),
(48, 'France', 'FRA', 'Paris', 'Europe', 67391582, 'https://flagcdn.com/fr.svg', 'AND, BEL, DEU, ITA, LUX, MCO, ESP, CHE'),
(49, 'French Guiana', 'GUF', 'Cayenne', 'Americas', 254541, 'https://flagcdn.com/gf.svg', 'BRA, SUR'),
(50, 'Gabon', 'GAB', 'Libreville', 'Africa', 2225728, 'https://flagcdn.com/ga.svg', 'CMR, COG, GNQ'),
(51, 'Gambia', 'GMB', 'Banjul', 'Africa', 2416664, 'https://flagcdn.com/gm.svg', 'SEN'),
(52, 'Georgia', 'GEO', 'Tbilisi', 'Asia', 3714000, 'https://flagcdn.com/ge.svg', 'ARM, AZE, RUS, TUR'),
(53, 'Germany', 'DEU', 'Berlin', 'Europe', 83240525, 'https://flagcdn.com/de.svg', 'AUT, BEL, CZE, DNK, FRA, LUX, NLD, POL, CHE'),
(54, 'Ghana', 'GHA', 'Accra', 'Africa', 31072945, 'https://flagcdn.com/gh.svg', 'BFA, CIV, TGO'),
(55, 'Gibraltar', 'GIB', 'Gibraltar', 'Europe', 33691, 'https://flagcdn.com/gi.svg', 'ESP'),
(56, 'Greece', 'GRC', 'Athens', 'Europe', 10715549, 'https://flagcdn.com/gr.svg', 'ALB, BGR, TUR, MKD'),
(57, 'Guatemala', 'GTM', 'Guatemala City', 'Americas', 16858333, 'https://flagcdn.com/gt.svg', 'BLZ, SLV, HND, MEX'),
(58, 'Guinea', 'GIN', 'Conakry', 'Africa', 13132792, 'https://flagcdn.com/gn.svg', 'CIV, GNB, LBR, MLI, SEN, SLE'),
(59, 'Guinea-Bissau', 'GNB', 'Bissau', 'Africa', 1967998, 'https://flagcdn.com/gw.svg', 'GIN, SEN'),
(60, 'Guyana', 'GUY', 'Georgetown', 'Americas', 786559, 'https://flagcdn.com/gy.svg', 'BRA, SUR, VEN'),
(61, 'Haiti', 'HTI', 'Port-au-Prince', 'Americas', 11402533, 'https://flagcdn.com/ht.svg', 'DOM'),
(62, 'Vatican City', 'VAT', 'Vatican City', 'Europe', 451, 'https://flagcdn.com/va.svg', 'ITA'),
(63, 'Honduras', 'HND', 'Tegucigalpa', 'Americas', 9904608, 'https://flagcdn.com/hn.svg', 'GTM, SLV, NIC'),
(64, 'Hungary', 'HUN', 'Budapest', 'Europe', 9749763, 'https://flagcdn.com/hu.svg', 'AUT, HRV, ROU, SRB, SVK, SVN, UKR'),
(65, 'Hong Kong', 'HKG', 'City of Victoria', 'Asia', 7481800, 'https://flagcdn.com/hk.svg', 'CHN'),
(66, 'India', 'IND', 'New Delhi', 'Asia', 1380004385, 'https://flagcdn.com/in.svg', 'AFG, BGD, BTN, MMR, CHN, NPL, PAK, LKA'),
(67, 'Indonesia', 'IDN', 'Jakarta', 'Asia', 273523621, 'https://flagcdn.com/id.svg', 'TLS, MYS, PNG'),
(68, 'Ivory Coast', 'CIV', 'Yamoussoukro', 'Africa', 26378275, 'https://flagcdn.com/ci.svg', 'BFA, GHA, GIN, LBR, MLI'),
(69, 'Iran (Islamic Republic of)', 'IRN', 'Tehran', 'Asia', 83992953, 'https://flagcdn.com/ir.svg', 'AFG, ARM, AZE, IRQ, PAK, TUR, TKM'),
(70, 'Iraq', 'IRQ', 'Baghdad', 'Asia', 40222503, 'https://flagcdn.com/iq.svg', 'IRN, JOR, KWT, SAU, SYR, TUR'),
(71, 'Ireland', 'IRL', 'Dublin', 'Europe', 4994724, 'https://flagcdn.com/ie.svg', 'GBR'),
(72, 'Israel', 'ISR', 'Jerusalem', 'Asia', 9216900, 'https://flagcdn.com/il.svg', 'EGY, JOR, LBN, SYR'),
(73, 'Italy', 'ITA', 'Rome', 'Europe', 59554023, 'https://flagcdn.com/it.svg', 'AUT, FRA, SMR, SVN, CHE, VAT'),
(74, 'Jordan', 'JOR', 'Amman', 'Asia', 10203140, 'https://flagcdn.com/jo.svg', 'IRQ, ISR, SAU, SYR'),
(75, 'Kazakhstan', 'KAZ', 'Nur-Sultan', 'Asia', 18754440, 'https://flagcdn.com/kz.svg', 'CHN, KGZ, RUS, TKM, UZB'),
(76, 'Kenya', 'KEN', 'Nairobi', 'Africa', 53771300, 'https://flagcdn.com/ke.svg', 'ETH, SOM, SSD, TZA, UGA'),
(77, 'Kuwait', 'KWT', 'Kuwait City', 'Asia', 4270563, 'https://flagcdn.com/kw.svg', 'IRQ, SAU'),
(78, 'Kyrgyzstan', 'KGZ', 'Bishkek', 'Asia', 6591600, 'https://flagcdn.com/kg.svg', 'CHN, KAZ, TJK, UZB'),
(79, 'Lao People\'s Democratic Republic', 'LAO', 'Vientiane', 'Asia', 7275556, 'https://flagcdn.com/la.svg', 'MMR, KHM, CHN, THA, VNM'),
(80, 'Latvia', 'LVA', 'Riga', 'Europe', 1901548, 'https://flagcdn.com/lv.svg', 'BLR, EST, LTU, RUS'),
(81, 'Lebanon', 'LBN', 'Beirut', 'Asia', 6825442, 'https://flagcdn.com/lb.svg', 'ISR, SYR'),
(82, 'Lesotho', 'LSO', 'Maseru', 'Africa', 2142252, 'https://flagcdn.com/ls.svg', 'ZAF'),
(83, 'Liberia', 'LBR', 'Monrovia', 'Africa', 5057677, 'https://flagcdn.com/lr.svg', 'GIN, CIV, SLE'),
(84, 'Libya', 'LBY', 'Tripoli', 'Africa', 6871287, 'https://flagcdn.com/ly.svg', 'DZA, TCD, EGY, NER, SDN, TUN'),
(85, 'Liechtenstein', 'LIE', 'Vaduz', 'Europe', 38137, 'https://flagcdn.com/li.svg', 'AUT, CHE'),
(86, 'Lithuania', 'LTU', 'Vilnius', 'Europe', 2794700, 'https://flagcdn.com/lt.svg', 'BLR, LVA, POL, RUS'),
(87, 'Luxembourg', 'LUX', 'Luxembourg', 'Europe', 632275, 'https://flagcdn.com/lu.svg', 'BEL, FRA, DEU'),
(88, 'North Macedonia', 'MKD', 'Skopje', 'Europe', 2083380, 'https://flagcdn.com/mk.svg', 'ALB, BGR, GRC, UNK, SRB'),
(89, 'Malawi', 'MWI', 'Lilongwe', 'Africa', 19129955, 'https://flagcdn.com/mw.svg', 'MOZ, TZA, ZMB'),
(90, 'Malaysia', 'MYS', 'Kuala Lumpur', 'Asia', 32365998, 'https://flagcdn.com/my.svg', 'BRN, IDN, THA'),
(91, 'Mali', 'MLI', 'Bamako', 'Africa', 20250834, 'https://flagcdn.com/ml.svg', 'DZA, BFA, GIN, CIV, MRT, NER, SEN'),
(92, 'Mauritania', 'MRT', 'Nouakchott', 'Africa', 4649660, 'https://flagcdn.com/mr.svg', 'DZA, MLI, SEN, ESH'),
(93, 'Mexico', 'MEX', 'Mexico City', 'Americas', 128932753, 'https://flagcdn.com/mx.svg', 'BLZ, GTM, USA'),
(94, 'Moldova (Republic of)', 'MDA', 'Chișinău', 'Europe', 2617820, 'https://flagcdn.com/md.svg', 'ROU, UKR'),
(95, 'Monaco', 'MCO', 'Monaco', 'Europe', 39244, 'https://flagcdn.com/mc.svg', 'FRA'),
(96, 'Mongolia', 'MNG', 'Ulan Bator', 'Asia', 3278292, 'https://flagcdn.com/mn.svg', 'CHN, RUS'),
(97, 'Montenegro', 'MNE', 'Podgorica', 'Europe', 621718, 'https://flagcdn.com/me.svg', 'ALB, BIH, HRV, UNK, SRB'),
(98, 'Morocco', 'MAR', 'Rabat', 'Africa', 36910558, 'https://flagcdn.com/ma.svg', 'DZA, ESH, ESP'),
(99, 'Mozambique', 'MOZ', 'Maputo', 'Africa', 31255435, 'https://flagcdn.com/mz.svg', 'MWI, ZAF, SWZ, TZA, ZMB, ZWE'),
(100, 'Myanmar', 'MMR', 'Naypyidaw', 'Asia', 54409794, 'https://flagcdn.com/mm.svg', 'BGD, CHN, IND, LAO, THA'),
(101, 'Namibia', 'NAM', 'Windhoek', 'Africa', 2540916, 'https://flagcdn.com/na.svg', 'AGO, BWA, ZAF, ZMB'),
(102, 'Nepal', 'NPL', 'Kathmandu', 'Asia', 29136808, 'https://flagcdn.com/np.svg', 'CHN, IND'),
(103, 'Netherlands', 'NLD', 'Amsterdam', 'Europe', 17441139, 'https://flagcdn.com/nl.svg', 'BEL, DEU'),
(104, 'Nicaragua', 'NIC', 'Managua', 'Americas', 6624554, 'https://flagcdn.com/ni.svg', 'CRI, HND'),
(105, 'Niger', 'NER', 'Niamey', 'Africa', 24206636, 'https://flagcdn.com/ne.svg', 'DZA, BEN, BFA, TCD, LBY, MLI, NGA'),
(106, 'Nigeria', 'NGA', 'Abuja', 'Africa', 206139587, 'https://flagcdn.com/ng.svg', 'BEN, CMR, TCD, NER'),
(107, 'Korea (Democratic People\'s Republic of)', 'PRK', 'Pyongyang', 'Asia', 25778815, 'https://flagcdn.com/kp.svg', 'CHN, KOR, RUS'),
(108, 'Norway', 'NOR', 'Oslo', 'Europe', 5379475, 'https://flagcdn.com/no.svg', 'FIN, SWE, RUS'),
(109, 'Oman', 'OMN', 'Muscat', 'Asia', 5106622, 'https://flagcdn.com/om.svg', 'SAU, ARE, YEM'),
(110, 'Pakistan', 'PAK', 'Islamabad', 'Asia', 220892331, 'https://flagcdn.com/pk.svg', 'AFG, CHN, IND, IRN'),
(111, 'Palestine, State of', 'PSE', 'Ramallah', 'Asia', 4803269, 'https://flagcdn.com/ps.svg', 'ISR, EGY, JOR'),
(112, 'Panama', 'PAN', 'Panama City', 'Americas', 4314768, 'https://flagcdn.com/pa.svg', 'COL, CRI'),
(113, 'Papua New Guinea', 'PNG', 'Port Moresby', 'Oceania', 8947027, 'https://flagcdn.com/pg.svg', 'IDN'),
(114, 'Paraguay', 'PRY', 'Asunción', 'Americas', 7132530, 'https://flagcdn.com/py.svg', 'ARG, BOL, BRA'),
(115, 'Peru', 'PER', 'Lima', 'Americas', 32971846, 'https://flagcdn.com/pe.svg', 'BOL, BRA, CHL, COL, ECU'),
(116, 'Poland', 'POL', 'Warsaw', 'Europe', 37950802, 'https://flagcdn.com/pl.svg', 'BLR, CZE, DEU, LTU, RUS, SVK, UKR'),
(117, 'Portugal', 'PRT', 'Lisbon', 'Europe', 10305564, 'https://flagcdn.com/pt.svg', 'ESP'),
(118, 'Qatar', 'QAT', 'Doha', 'Asia', 2881060, 'https://flagcdn.com/qa.svg', 'SAU'),
(119, 'Republic of Kosovo', 'UNK', 'Pristina', 'Europe', 1775378, 'https://flagcdn.com/xk.svg', 'ALB, MKD, MNE, SRB'),
(120, 'Romania', 'ROU', 'Bucharest', 'Europe', 19286123, 'https://flagcdn.com/ro.svg', 'BGR, HUN, MDA, SRB, UKR'),
(121, 'Russian Federation', 'RUS', 'Moscow', 'Europe', 144104080, 'https://flagcdn.com/ru.svg', 'AZE, BLR, CHN, EST, FIN, GEO, KAZ, PRK, LVA, LTU, MNG, NOR, POL, UKR'),
(122, 'Rwanda', 'RWA', 'Kigali', 'Africa', 12952209, 'https://flagcdn.com/rw.svg', 'BDI, COD, TZA, UGA'),
(123, 'Saint Martin (French part)', 'MAF', 'Marigot', 'Americas', 38659, 'https://flagcdn.com/mf.svg', 'SXM, NLD'),
(124, 'San Marino', 'SMR', 'City of San Marino', 'Europe', 33938, 'https://flagcdn.com/sm.svg', 'ITA'),
(125, 'Saudi Arabia', 'SAU', 'Riyadh', 'Asia', 34813867, 'https://flagcdn.com/sa.svg', 'IRQ, JOR, KWT, OMN, QAT, ARE, YEM'),
(126, 'Senegal', 'SEN', 'Dakar', 'Africa', 16743930, 'https://flagcdn.com/sn.svg', 'GMB, GIN, GNB, MLI, MRT'),
(127, 'Serbia', 'SRB', 'Belgrade', 'Europe', 6908224, 'https://flagcdn.com/rs.svg', 'BIH, BGR, HRV, HUN, UNK, MKD, MNE, ROU'),
(128, 'Sierra Leone', 'SLE', 'Freetown', 'Africa', 7976985, 'https://flagcdn.com/sl.svg', 'GIN, LBR'),
(129, 'Sint Maarten (Dutch part)', 'SXM', 'Philipsburg', 'Americas', 40812, 'https://flagcdn.com/sx.svg', 'MAF'),
(130, 'Slovakia', 'SVK', 'Bratislava', 'Europe', 5458827, 'https://flagcdn.com/sk.svg', 'AUT, CZE, HUN, POL, UKR'),
(131, 'Slovenia', 'SVN', 'Ljubljana', 'Europe', 2100126, 'https://flagcdn.com/si.svg', 'AUT, HRV, ITA, HUN'),
(132, 'Somalia', 'SOM', 'Mogadishu', 'Africa', 15893219, 'https://flagcdn.com/so.svg', 'DJI, ETH, KEN'),
(133, 'South Africa', 'ZAF', 'Pretoria', 'Africa', 59308690, 'https://flagcdn.com/za.svg', 'BWA, LSO, MOZ, NAM, SWZ, ZWE'),
(134, 'Korea (Republic of)', 'KOR', 'Seoul', 'Asia', 51780579, 'https://flagcdn.com/kr.svg', 'PRK'),
(135, 'Spain', 'ESP', 'Madrid', 'Europe', 47351567, 'https://flagcdn.com/es.svg', 'AND, FRA, GIB, PRT, MAR'),
(136, 'Sri Lanka', 'LKA', 'Sri Jayawardenepura Kotte', 'Asia', 21919000, 'https://flagcdn.com/lk.svg', 'IND'),
(137, 'Sudan', 'SDN', 'Khartoum', 'Africa', 43849269, 'https://flagcdn.com/sd.svg', 'CAF, TCD, EGY, ERI, ETH, LBY, SSD'),
(138, 'South Sudan', 'SSD', 'Juba', 'Africa', 11193729, 'https://flagcdn.com/ss.svg', 'CAF, COD, ETH, KEN, SDN, UGA'),
(139, 'Suriname', 'SUR', 'Paramaribo', 'Americas', 586634, 'https://flagcdn.com/sr.svg', 'BRA, FRA, GUF, GUY'),
(140, 'Swaziland', 'SWZ', 'Mbabane', 'Africa', 1160164, 'https://flagcdn.com/sz.svg', 'MOZ, ZAF'),
(141, 'Sweden', 'SWE', 'Stockholm', 'Europe', 10353442, 'https://flagcdn.com/se.svg', 'FIN, NOR'),
(142, 'Switzerland', 'CHE', 'Bern', 'Europe', 8636896, 'https://flagcdn.com/ch.svg', 'AUT, FRA, ITA, LIE, DEU'),
(143, 'Syrian Arab Republic', 'SYR', 'Damascus', 'Asia', 17500657, 'https://flagcdn.com/sy.svg', 'IRQ, ISR, JOR, LBN, TUR'),
(144, 'Tajikistan', 'TJK', 'Dushanbe', 'Asia', 9537642, 'https://flagcdn.com/tj.svg', 'AFG, CHN, KGZ, UZB'),
(145, 'Tanzania, United Republic of', 'TZA', 'Dodoma', 'Africa', 59734213, 'https://flagcdn.com/tz.svg', 'BDI, COD, KEN, MWI, MOZ, RWA, UGA, ZMB'),
(146, 'Thailand', 'THA', 'Bangkok', 'Asia', 69799978, 'https://flagcdn.com/th.svg', 'MMR, KHM, LAO, MYS'),
(147, 'Timor-Leste', 'TLS', 'Dili', 'Asia', 1318442, 'https://flagcdn.com/tl.svg', 'IDN'),
(148, 'Togo', 'TGO', 'Lomé', 'Africa', 8278737, 'https://flagcdn.com/tg.svg', 'BEN, BFA, GHA'),
(149, 'Tunisia', 'TUN', 'Tunis', 'Africa', 11818618, 'https://flagcdn.com/tn.svg', 'DZA, LBY'),
(150, 'Turkey', 'TUR', 'Ankara', 'Asia', 84339067, 'https://flagcdn.com/tr.svg', 'ARM, AZE, BGR, GEO, GRC, IRN, IRQ, SYR'),
(151, 'Turkmenistan', 'TKM', 'Ashgabat', 'Asia', 6031187, 'https://flagcdn.com/tm.svg', 'AFG, IRN, KAZ, UZB'),
(152, 'Uganda', 'UGA', 'Kampala', 'Africa', 45741000, 'https://flagcdn.com/ug.svg', 'COD, KEN, RWA, SSD, TZA'),
(153, 'Ukraine', 'UKR', 'Kyiv', 'Europe', 44134693, 'https://flagcdn.com/ua.svg', 'BLR, HUN, MDA, POL, ROU, RUS, SVK'),
(154, 'United Arab Emirates', 'ARE', 'Abu Dhabi', 'Asia', 9890400, 'https://flagcdn.com/ae.svg', 'OMN, SAU'),
(155, 'United Kingdom of Great Britain and Northern Ireland', 'GBR', 'London', 'Europe', 67215293, 'https://flagcdn.com/gb.svg', 'IRL'),
(156, 'United States of America', 'USA', 'Washington, D.C.', 'Americas', 329484123, 'https://flagcdn.com/us.svg', 'CAN, MEX'),
(157, 'Uruguay', 'URY', 'Montevideo', 'Americas', 3473727, 'https://flagcdn.com/uy.svg', 'ARG, BRA'),
(158, 'Uzbekistan', 'UZB', 'Tashkent', 'Asia', 34232050, 'https://flagcdn.com/uz.svg', 'AFG, KAZ, KGZ, TJK, TKM'),
(159, 'Venezuela (Bolivarian Republic of)', 'VEN', 'Caracas', 'Americas', 28435943, 'https://flagcdn.com/ve.svg', 'BRA, COL, GUY'),
(160, 'Vietnam', 'VNM', 'Hanoi', 'Asia', 97338583, 'https://flagcdn.com/vn.svg', 'KHM, CHN, LAO'),
(161, 'Western Sahara', 'ESH', 'El Aaiún', 'Africa', 510713, 'https://flagcdn.com/eh.svg', 'DZA, MRT, MAR'),
(162, 'Yemen', 'YEM', 'Sana\'a', 'Asia', 29825968, 'https://flagcdn.com/ye.svg', 'OMN, SAU'),
(163, 'Zambia', 'ZMB', 'Lusaka', 'Africa', 18383956, 'https://flagcdn.com/zm.svg', 'AGO, BWA, COD, MWI, MOZ, NAM, TZA, ZWE'),
(164, 'Zimbabwe', 'ZWE', 'Harare', 'Africa', 14862927, 'https://flagcdn.com/zw.svg', 'BWA, MOZ, ZAF, ZMB');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
