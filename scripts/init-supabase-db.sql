-- Create admin_users table
CREATE TABLE IF NOT EXISTS admin_users (
  id BIGSERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price BIGINT NOT NULL,
  image_url TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create financial_records table
CREATE TABLE IF NOT EXISTS financial_records (
  id BIGSERIAL PRIMARY KEY,
  customer_name VARCHAR(255) NOT NULL,
  service_name VARCHAR(255) NOT NULL,
  price BIGINT NOT NULL,
  transaction_date DATE DEFAULT CURRENT_DATE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Insert default admin user
INSERT INTO admin_users (username, password) VALUES ('admin', 'admin123')
ON CONFLICT (username) DO NOTHING;

-- Insert default services
INSERT INTO services (name, description, price, image_url) VALUES
('Body Massage', 'Pijat seluruh tubuh yang menenangkan untuk menghilangkan keletihan dan meningkatkan kesehatan.', 100000, '/body-massage.jpg'),
('Totok Punggung', 'Terapi pijat punggung tradisional untuk melegakan dan merelaksasi otot.', 50000, '/back-massage.jpg'),
('Lulur Badan', 'Perawatan lulur tradisional Indonesia untuk kulit halus dan bercahaya.', 100000, '/body-scrub.jpg'),
('Facial Treatment', 'Perawatan wajah profesional untuk kulit sehat dan bersih.', 75000, '/facial.jpg'),
('Manicure & Pedicure', 'Perawatan kuku tangan dan kaki dengan desain eksklusif.', 60000, '/manicure.jpg'),
('Hair Spa', 'Terapi rambut mewah untuk rambut kuat dan berkilau.', 80000, '/hair-spa.jpg'),
('Eyebrow Threading', 'Membentuk alis dengan teknik tradisional yang presisi.', 40000, '/eyebrow.jpg'),
('Makeup Artist', 'Jasa makeup profesional untuk berbagai acara spesial.', 150000, '/makeup.jpg'),
('Hair Cutting', 'Potong rambut profesional dengan desain modern.', 50000, '/haircut.jpg'),
('Hair Coloring', 'Pewarna rambut berkualitas tinggi dengan hasil profesional.', 120000, '/hair-color.jpg'),
('Bridal Package', 'Paket lengkap perawatan untuk pengantin.', 500000, '/bridal.jpg'),
('Relaxing Massage', 'Pijat relaksasi untuk menenangkan tubuh dan pikiran.', 90000, '/relax-massage.jpg')
ON CONFLICT DO NOTHING;
