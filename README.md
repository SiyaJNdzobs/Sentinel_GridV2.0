🛡️ SENTINEL GRID V2 — Billing System Protection with Adaptive Deception
ITWEB Secure Innovation Hackathon 2026 | Team: Neutral Fence

🎯 One-Sentence Summary
*"While the recent Ekurhuleni billing system breach exposed how vulnerable municipal financial systems are to catastrophic data manipulation—a gap our Sentinel Grid tool directly addresses—our prototype simulates a billing system on one screen and a hacking interface on the other, demonstrating how five existing security layers feeding every log into Sentinel Grid trigger perfectly nested honeypots that convince attackers their hack succeeded while keeping all real billing data completely intact. With TLS proxy inspection and AI-powered attack learning, our V2 upgrade adds zero-trust security and autonomous response capabilities."*

🚀 Live Prototype
Detail	Information
Live Demo	[To be deployed after completion]
Repository	github.com/yourusername/Sentinel_gridFinale
📋 How to Run / How to Test
Step 1: Clone the repository
bash
git clone https://github.com/yourusername/Sentinel_gridFinale.git
cd Sentinel_gridFinale
Step 2: Access the Billing System (Admin Panel)
Field	Value
Acceptable usernames	SiyaB, Lucky, Oara
Password (all users)	sasingenje@25
⚠️ Only these three usernames work. No other credentials will grant access.

Step 3: Understand Sentinel Grid Activation (Two Modes)
Mode	Trigger	What Happens
Auto-Activation	After 5 defense layers are exhausted	SG kicks in automatically — no manual action needed. Honeypots deploy, hackers see fake data, real billing system stays intact.
Manual Full Protection	Enter SG admin codes (see below)	Activates SG immediately without waiting for 5 layers to fail. 5 layers + SG = maximum protection. No breach possible.
Step 4: Manual Activation Codes
Code Type	Exact Code Value
SG Code 1	SG-V2-ORION-7194!
SG Code 2	SG-V2-NOVA-4826!
SG Code 3	SG-V2-VAULT-9307!
DUO Code	482901
Step 5: Key Test Case — Hacker Manipulates Client Bills
Scenario	Result
When SG is OFF (after some or all layers are down)	Attack is a SUCCESS. Hacker can manipulate real billing data.
When SG is ACTIVE (auto OR manual mode)	Hacker gets an interface that looks 100% real but is actually fake honeypot data. All municipality real data stays 100% INTACT.
🆕 SENTINEL GRID V2 UPGRADES
What's New in V2
Feature	Description
TLS Proxy Gateway	Decrypts HTTPS traffic between internet and servers for full inspection
AI Attack Learning	Every attack pattern is analyzed, stored, and used to improve detection
Autonomous Response	SOAR rules auto-block ports and isolate sessions on confirmed attacks
Supabase Database	All logs, patterns, and blocked ports stored with row-level security
Cryptographic Hash Chain	Immutable audit trail for forensic evidence
Zero-False-Positive Alerting	Honeypot alerts require no human triage
The Attack → Learn → Respond Sequence
text
1. ATTACK OCCURS → Honeypot activates, serves fake data
2. AI LEARNS → Classifies attack across 5 dimensions
3. STORES → Pattern saved to Supabase with hash chain
4. RESPONDS → Autonomous actions trigger (block port, isolate session)
5. ADVISES → Security team receives AI-generated recommendations
6. EVOLVES → Pattern added to training data for future classification
The 5 Defense Layers
Layer	Name	Attempts to Breach
1	Perimeter Firewall	3 attempts
2	WAF / SQL Injection Filter	4 attempts
3	API Gateway	5 attempts
4	Database Access Control	6 attempts
5	Admin MFA	4 attempts
The 3 Nested Honeypot Layers
Layer	Simulation	Purpose
Layer 1	Consumer Billing Portal	First encounter - fake ratepayer accounts
Layer 2	Administrative Billing Management	Matches Ekurhuleni attack pattern
Layer 3	Core Financial Processing	Complete forensic capture
📊 The Ekurhuleni Case Study
What happened: A cybercrime syndicate systematically infiltrated the City of Ekurhuleni's SOLAR billing platform between 2023 and 2024, manipulating and deleting billing records to fraudulently clear property rates debt. The breach enabled fraud totalling more than R2 billion.

How SENTINEL GRID addresses this:

Attacker Action	Ekurhuleni (What happened)	SENTINEL GRID (What happens)
Insider provides credentials	Attackers operated freely for months	Zero Trust detects behavioral anomaly
Access billing portal	No interception mechanism	Layer 1 Honeypot activates
Request rates clearance	Fraudulent certificates issued	Fake certificates with canarytokens
Modify debt records	R2 billion stolen over time	Layer 2 Honeypot shows fake balances
Escalate privileges	Undetected for over a year	Layer 3 captures forensic record
Detection	Only through financial reconciliation	SOAR auto-contains in milliseconds
👥 Dev Team
Name	Role	GitHub Profile
Siyabonga José Ndzobondzobo	Prototype Planning and overview design & HTML	github.com/SiyaJNdzobs
Lucky Pinga	Architecture Designing & JavaScript	github.com/luckypinga
Oarabetse Morara	Research Lead & CSS	github.com/oarabetse-morara
🛠️ Tech Stack
Tool	Purpose
Frontend	HTML, CSS, JavaScript
Database	Supabase (PostgreSQL with RLS)
TLS Proxy	NGINX with Lua inspection
AI/ML	Scikit-learn + Claude API
SIEM/SOAR	Wazuh + Elasticsearch
Container	Docker + Docker Compose
Version Control	GitHub
📚 Conclusions & Lessons Learned
Security on the solution first, then the problem.

The Ekurhuleni incident taught us that reactive security fails when attackers are already inside. Sentinel Grid flips the model:

Deception buys time — Attackers waste minutes or hours inside honeypots

AI learns from every attack — Patterns are stored and used to improve detection

Autonomous response — Ports blocked, sessions isolated in milliseconds

Data integrity is preserved — Real billing data never gets touched

Attackers believe they won — They don't try alternative attack paths

Immutable audit trail — Cryptographic hash chain for prosecution evidence

The Infinite Rates Office Metaphor:

Imagine a municipal rates office that, when infiltrated, does not contain real billing records. It contains a door to another rates office. That rates office contains another door. Each office looks exactly like the real system. The attacker navigates endlessly, convinced they are making progress, while the actual billing infrastructure remains completely untouched.

⚠️ Important Note
This prototype is for educational, research, and defensive demonstration purposes only. No real municipal data is used. All billing data, client records, and PII are simulated using generated fake data.

🔗 Related Links
Ekurhuleni Billing System Incident Reference

SCOPA Parliamentary Hearings May 2026

OMA Forensic Report July 2025

